import React, { useEffect } from "react";
import MovieList from "./MovieList";
import { useMovieStore } from "../utils/store";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useMovieStore();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-80 z-20 relative md:pl-12 pl-4">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />{" "}
        <MovieList title={"Popular"} movies={popularMovies} />{" "}
        <MovieList title={"Top Rated"} movies={topRatedMovies} />{" "}
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />{" "}
        <MovieList title={"Horror"} movies={nowPlayingMovies} />{" "}
      </div>
    </div>
  );
};

export default SecondaryContainer;
