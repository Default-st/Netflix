import { useEffect } from "react";
import { useMovieStore } from "../utils/store";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const { setNowPlayingMovies } = useMovieStore();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setNowPlayingMovies(json.results);
  };
};

export default useNowPlayingMovies;
