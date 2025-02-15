import axios from "./../../utils/axios";
import requests from "../../utils/request";

import { useEffect, useState } from "react";
import styles from "./banner.module.css";

function Banner() {
  //check the connection of urls and my api
  // console.log(requests.fetchNetflixOriginal);
  //creating state with the name of movies and setMovies updater
  const [movies, setMovies] = useState({});
  useEffect(() => {
    async function getmovies() {
      const response = await axios.get(requests.fetchNetflixOriginal);
      //check the response data
      console.log(response.data.results);
      setMovies(response.data.results);
    }
    getmovies();
  },[]);

  return (
    <>
      <div
        className={`${styles.banner_img} `}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movies?.backdrop_path}`,
        }}
      ></div>
    </>
  );
}

export default Banner;

// :
