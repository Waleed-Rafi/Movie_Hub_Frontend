import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import Card from "../Components/Card";
import "./Screens.css";
import axios from "../axios/axios";
import { AxiosResponse } from "axios";

interface MoviesData {
  MOV_ID: number;
  MOV_NAME: string;
  MOV_LANG: string;
  MOV_THUMBNAIL: string;
  MOV_HOUR?: string;
  MOV_DATE?: string;
}

const Home: React.FC = () => {
  const [allMovies, setAllMovies] = useState<MoviesData[] | []>([]);
  const deleteHandler = (filteredMovies: MoviesData[]) => {
    setAllMovies(filteredMovies);
  };
  useEffect(() => {
    axios.get("/movies/all").then((response: AxiosResponse) => {
      setAllMovies(response.data.data);
    });
  }, []);
  return (
    <div>
      <Carousel moviesData={allMovies} />
      <Card allMovies={allMovies} movieDeleteHandler={deleteHandler} />
    </div>
  );
};

export default Home;
