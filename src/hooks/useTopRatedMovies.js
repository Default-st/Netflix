import { useEffect } from "react";
import { useMovieStore } from "../utils/store";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const { setTopRatedMovies } = useMovieStore();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    setTopRatedMovies(json.results);
  };
};

export default useTopRatedMovies;
