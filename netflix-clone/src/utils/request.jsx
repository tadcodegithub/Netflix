const API_KEY = import.meta.env.VITE_API_KEY;
const request = {
  fetchNetflixOriginal: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=28`,
};
export default request;
