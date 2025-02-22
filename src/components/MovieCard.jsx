import React from "react";
import { TMDB_IMAGE_PATH } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return <img src={TMDB_IMAGE_PATH + posterPath} alt="Movie Card" />;
};

export default MovieCard;
