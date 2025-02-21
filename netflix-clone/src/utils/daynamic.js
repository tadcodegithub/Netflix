import Request from "./request";
const fetchdata = [
  {
    fetchUrl: Request.fetchTrending,
    title: "Trending New",
    isSmall: false,
  },
  {
    fetchUrl: Request.fetchTopRated,
    title: "Top rated",
    isSmall: true,
  },
  {
    fetchUrl: Request.fetchAction,
    title: "Action  Movies",
    isSmall: true,
  },
  {
    fetchUrl: Request.fetchComedyMovie,
    title: "Comedy Movies",
    isSmall: true,
  },
  {
    fetchUrl: Request.fetchDocumentaries,
    title: "Documentary Movies",
    isSmall: true,
  },
  {
    fetchUrl: Request.fetchHorrorMovie,
    title: "Horror Movies",
    isSmall: true,
  },
  {
    fetchUrl: Request.fetchRomanceMovie,
    title: "Romance Movies",
    isSmall: true,
  },
  {
    fetchUrl: Request.fetchAnima,
    title: "Animation",
    isSmall: true,
  },
];
export default fetchdata;
