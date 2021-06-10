import React, { useState } from "react";
import AppInput from "../Components/AppInput";
import "./Screens.css";

interface movieDataIF {
  Mov_Name: string;
  Mov_Lang: string;
  Mov_Thumbnail: string;
  Mov_Hour: string;
  Mov_Date: string;
}

export default function CreateMovie() {
  const [movieData, setMovieData] = useState<movieDataIF>({
    Mov_Name: "",
    Mov_Lang: "",
    Mov_Thumbnail: "",
    Mov_Hour: "",
    Mov_Date: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMovieData({
      ...movieData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(movieData);
  };
  return (
    <div className="create-form">
      <h1 className="create-heading">CREATE NEW MOVIES</h1>
      <br />
      <form onSubmit={(e) => submitHandler(e)}>
        {/* <input
          name="Mov_Name"
          className="form-control"
          placeholder="Name"
          value={movieData.Mov_Name}
          onChange={(e) => changeHandler(e)}
        />
        <input
          name="Mov_Lang"
          className="form-control"
          placeholder="Language"
          value={movieData.Mov_Lang}
          onChange={(e) => changeHandler(e)}
        />
        <input
          name="Mov_Thumbnail"
          className="form-control"
          placeholder="Thumbnail Url"
          value={movieData.Mov_Thumbnail}
          onChange={(e) => changeHandler(e)}
        />
        <input
          name="Mov_Hour"
          className="form-control"
          placeholder="Play Time in (hh:mm:ss)"
          value={movieData.Mov_Hour}
          onChange={(e) => changeHandler(e)}
        />
        <input
          name="Mov_Date"
          className="form-control"
          placeholder="Movie Date in (yyyy-mm-dd)"
          value={movieData.Mov_Date}
          onChange={(e) => changeHandler(e)}
        /> */}
        <AppInput
          name="Mov_Name"
          placeholder="Name"
          value={movieData.Mov_Name}
          changeHandler={changeHandler}
        />
        <AppInput
          name="Mov_Lang"
          placeholder="Language"
          value={movieData.Mov_Lang}
          changeHandler={changeHandler}
        />
        <AppInput
          name="Mov_Thumbnail"
          placeholder="Thumbnail Url"
          value={movieData.Mov_Thumbnail}
          changeHandler={changeHandler}
        />
        <AppInput
          name="Mov_Hour"
          placeholder="Play Time in (hh:mm:ss)"
          value={movieData.Mov_Hour}
          changeHandler={changeHandler}
        />
        <AppInput
          name="Mov_Date"
          placeholder="Movie Date in (yyyy-mm-dd)"
          value={movieData.Mov_Date}
          changeHandler={changeHandler}
        />
        <div className="d-grid gap-2 col-20 mx-auto">
          <button
            className="btn btn-primary create-submit-button"
            type="submit"
          >
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
}
