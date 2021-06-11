import React, { useEffect, useState } from "react";
import AppInput from "../Components/AppInput";
import AppSubmitButton from "../Components/AppSubmitButton";
import "./Screens.css";
import axios from "../axios/axios";
import { AxiosResponse } from "axios";
import AppAlert from "../Components/AppAlert";

interface movieDataIF {
  MOV_NAME: string;
  MOV_LANG: string;
  MOV_THUMBNAIL: string;
  MOV_HOUR?: string;
  MOV_DATE?: string;
}

enum ComponentType {
  CREATE = "CREATE",
  EDIT = "EDIT",
}

interface Props {
  componentType: ComponentType;
}

const CreateMovie: React.FC<Props> = ({ componentType }) => {
  const [movieData, setMovieData] = useState<movieDataIF>({
    MOV_NAME: "",
    MOV_LANG: "",
    MOV_THUMBNAIL: "",
    MOV_HOUR: "",
    MOV_DATE: "",
  });
  const urlParams = new URLSearchParams(window.location.search)!;
  useEffect(() => {
    if (componentType === ComponentType.EDIT) {
      const movieId = parseInt(urlParams.get("mov_id")!);
      axios
        .get(`/movie/find?mov_id=${movieId}`)
        .then((response: AxiosResponse) => {
          let tempObj = response.data.data[0];
          delete tempObj.MOV_ID;
          setMovieData(tempObj);
        });
    }
  }, []);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMovieData({
      ...movieData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const createSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let data = { ...movieData };
    if (data.MOV_DATE?.length === 0) delete data.MOV_DATE;
    if (data.MOV_HOUR?.length === 0) delete data.MOV_HOUR;

    axios.post("/movie/create", data).then((response: AxiosResponse) => {
      if (response.data.error) {
        setErrorMessage(response.data.error);
        setSuccessMessage(null);
      } else if (response.data.success) {
        setSuccessMessage(response.data.success);
        setErrorMessage(null);
      }
    });
  };

  const updateSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const movieId = parseInt(urlParams.get("mov_id")!);
    let data = {
      MOV_ID: movieId,
      ...movieData,
    };
    if (data.MOV_DATE?.length === 0) delete data.MOV_DATE;
    else data.MOV_DATE = movieData.MOV_DATE?.slice(0, 10);
    if (data.MOV_HOUR?.length === 0) delete data.MOV_HOUR;

    axios.put("/movie/update", data).then((response: AxiosResponse) => {
      if (response.data.error) {
        setErrorMessage(response.data.error);
        setSuccessMessage(null);
      } else if (response.data.success) {
        setSuccessMessage(response.data.success);
        setErrorMessage(null);
      }
    });
  };
  return (
    <div className="create-form">
      <h1 className="create-heading">
        {componentType === ComponentType.CREATE
          ? "CREATE NEW MOVIES"
          : "EDIT MOVIE"}
      </h1>
      <AppAlert
        visible={errorMessage || successMessage ? true : false}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      <form
        onSubmit={(e) => {
          componentType === ComponentType.CREATE
            ? createSubmitHandler(e)
            : updateSubmitHandler(e);
        }}
      >
        <AppInput
          name="MOV_NAME"
          placeholder="Name"
          value={movieData.MOV_NAME}
          changeHandler={changeHandler}
        />
        <AppInput
          name="MOV_LANG"
          placeholder="Language"
          value={movieData.MOV_LANG}
          changeHandler={changeHandler}
        />
        <AppInput
          name="MOV_THUMBNAIL"
          placeholder="Thumbnail Url"
          value={movieData.MOV_THUMBNAIL}
          changeHandler={changeHandler}
        />
        <AppInput
          name="MOV_HOUR"
          placeholder="Play Time in (hh:mm:ss)"
          value={movieData.MOV_HOUR || ""}
          changeHandler={changeHandler}
        />
        <AppInput
          name="MOV_DATE"
          placeholder="Movie Date in (yyyy-mm-dd)"
          value={movieData.MOV_DATE || ""}
          changeHandler={changeHandler}
        />
        <AppSubmitButton
          title={componentType === ComponentType.CREATE ? "CREATE" : "UPDATE"}
        />
      </form>
    </div>
  );
};

export default CreateMovie;
