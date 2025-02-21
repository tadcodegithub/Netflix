import instance from "./../../utils/axios";//similar to instance
import requests from "../../utils/request";

import { useEffect, useState } from "react";
import styles from "./banner.module.css";

function Banner() {
  //check the connection of urls and my api
  // console.log(requests.fetchNetflixOriginal);
  //creating state with the name of movies and setMovies updater
  const [movies, setMovies] = useState({});
  const img_common_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function getmovies() {
      const response = await instance.get(requests.fetchNetflixOriginal);
      //check the response data
      // console.log(response.data.results);
      const sampleIndex=Math.floor(Math.random()*response.data.results.length);
      // console.log(sampleIndex)
      setMovies(response.data.results[sampleIndex]);
      
    }
    getmovies();
  }, []);
  function truncate(full_string, cut_len) {
    // string.substr(startIndex, length)
    return full_string?.length > cut_len
      ? full_string.substr(0, cut_len - 1) + "..."
      : full_string;
  }
  return (
    <>
      <div
        className={`${styles.Banner_img} `}
        style={{
          backgroundImage: `url(${img_common_url}${movies?.backdrop_path}`,
        }}
      >
        <div className={styles.banner_content}>
          <div>
            <h1 className={styles.banner_title}>
              {movies.original_title || movies.title}
            </h1>
          </div>
          <div className={styles.btns}>
            <button className={styles.btn_play}>Play</button>
            <button className={styles.btn_list}>My List</button>
          </div>
          <div className={styles.banner_des}>
            {truncate(movies.overview, 150)}
          </div>
        </div>
        <div className={styles.banner_fade}></div>
      </div>
    </>
  );
}

export default Banner;
