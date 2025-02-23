import { useEffect } from "react";
import { useMovieStore } from "../utils/store";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const { popularMovies, setPopularMovies } = useMovieStore();
  useEffect(() => {
    popularMovies.length === 0 && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setPopularMovies(json.results);
  };
};

export default usePopularMovies;
