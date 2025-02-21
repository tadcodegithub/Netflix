import { useEffect, useState } from "react";
import Instance from "../../utils/Axios";
import styles from "./Row.module.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isSmall }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [seclectedmovie, setSelectedMovies] = useState("");

  useEffect(() => {
    Instance.get(fetchUrl).then((res) => setMovies(res.data.results));
  }, [fetchUrl]);

  const BaseUrl = "https://image.tmdb.org/t/p/original";

  const playTrailer = (mov) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setSelectedMovies("");
    } else {
      movieTrailer(mov.original_title || mov.title).then((data) => {
        const urlParms = new URLSearchParams(new URL(data).search);
        setTrailerUrl(urlParms.get("v"));
        setSelectedMovies(mov.title);
      });
    }
  };
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.single_row_container}>
      <div className={styles.banner_title}>
        <h1>{title}</h1>
      </div>
      <div
        className={`${styles.movie_row} ${
          isSmall ? styles.isSmall : styles.isLarge
        }`}
      >
        {movies?.map((singleMovie, i) => (
          <div key={singleMovie.id}>
            <img
              src={BaseUrl + singleMovie.poster_path}
              alt={singleMovie.title}
              onClick={() => playTrailer(singleMovie)}
            />
          </div>
        ))}
      </div>
      <div className={styles.YouTube_trailer}>
        {trailerUrl && <h1>Trailer of አልዩ አምባ ---{seclectedmovie}--- </h1>}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
