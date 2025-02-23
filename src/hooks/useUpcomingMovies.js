import { useEffect } from "react";
import { useMovieStore } from "../utils/store";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const { upcomingMovies, setUpcomingMovies } = useMovieStore();
  useEffect(() => {
    upcomingMovies?.length === 0 && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setUpcomingMovies(json.results);
  };
};

export default useUpcomingMovies;
