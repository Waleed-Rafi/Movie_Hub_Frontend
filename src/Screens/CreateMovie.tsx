import React, { useState } from "react";
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

const CreateMovie: React.FC = () => {
  const [movieData, setMovieData] = useState<movieDataIF>({
    MOV_NAME: "",
    MOV_LANG: "",
    MOV_THUMBNAIL: "",
    MOV_HOUR: "",
    MOV_DATE: "",
  });
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

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
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
  return (
    <div className="create-form">
      <h1 className="create-heading">CREATE NEW MOVIES</h1>
      <AppAlert
        visible={errorMessage || successMessage ? true : false}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      <form onSubmit={(e) => submitHandler(e)}>
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
        <AppSubmitButton title="CREATE" />
      </form>
    </div>
  );
};

export default CreateMovie;
