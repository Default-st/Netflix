import React from "react";
import { useSearchedMovieStore } from "../utils/store";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { searchedMovies, movieNames } = useSearchedMovieStore();
  console.log(searchedMovies, movieNames);
  if (movieNames.length === 0) return null;
  console.log(movieNames);
  return (
    <div className="p-4 m-4 bg-black text-white opacity-80">
      {movieNames.map((movieName, idx) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={searchedMovies[idx]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestion;
