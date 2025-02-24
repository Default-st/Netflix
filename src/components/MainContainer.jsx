import React from "react";
import { useMovieStore } from "../utils/store";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const { nowPlayingMovies } = useMovieStore();
  if (nowPlayingMovies?.length === 0) {
    return;
  }
  const mainMovie = nowPlayingMovies?.[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full md:pt-0 pt-[30%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <div>
        <VideoBackground id={id} />
      </div>
    </div>
  );
};

export default MainContainer;
