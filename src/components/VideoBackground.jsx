import { useMovieStore } from "../utils/store";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackground = ({ id }) => {
  const { trailer } = useMovieStore();
  useGetMovieTrailer(id);

  return (
    <div className="w-screen ">
      {trailer ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?si=efkHG7Cph32oBznD&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ) : null}
    </div>
  );
};

export default VideoBackground;
