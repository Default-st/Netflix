import React from "react";
import { TMDB_IMAGE_PATH } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-48 w-36 pr-4">
      <img src={TMDB_IMAGE_PATH + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
