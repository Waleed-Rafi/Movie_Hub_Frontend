import React from "react";
import { Link } from "react-router-dom";
import axios from "../axios/axios";
import "./Components.css";

interface MoviesData {
  MOV_ID: number;
  MOV_NAME: string;
  MOV_LANG: string;
  MOV_THUMBNAIL: string;
  MOV_HOUR?: string;
  MOV_DATE?: string;
}

const Card: React.FC<{
  allMovies: MoviesData[];
  movieDeleteHandler: Function;
}> = ({ allMovies, movieDeleteHandler }) => {
  const deleteHandler = (movieId: number) => {
    axios.delete(`/movie/delete?mov_id=${movieId}`).then((res) => {
      if (res.data.success) {
        let filteredMovies: MoviesData[] = allMovies.filter((movies) => {
          return movies.MOV_ID !== movieId;
        });
        movieDeleteHandler(filteredMovies);
      }
    });
  };

  return (
    <div className="card-group">
      {allMovies.map((data, index) => {
        return (
          <div
            className="card"
            key={index}
            style={{ borderLeft: "1px solid lightgray" }}
          >
            <img src={data.MOV_THUMBNAIL} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                {'"' + data.MOV_ID + '" ' + data.MOV_NAME}
              </h5>
              <p className="card-text">{data.MOV_LANG}</p>
              <p className="card-text">
                <small className="text-muted">
                  {data.MOV_DATE?.split("").splice(0, 10).join("") +
                    " " +
                    data.MOV_HOUR}
                </small>
              </p>
              <div style={{ textAlign: "left" }}>
                <Link
                  to={`/edit?mov_id=${data.MOV_ID}`}
                  className="btn btn-primary"
                  style={{ marginRight: "20px", width: "8rem" }}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  style={{ width: "8rem" }}
                  onClick={() => deleteHandler(data.MOV_ID)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
