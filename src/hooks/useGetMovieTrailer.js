import { useEffect } from "react";
import { useMovieStore } from "../utils/store";
import { API_OPTIONS } from "../utils/constants";

const useGetMovieTrailer = (id) => {
  const { setTrailer } = useMovieStore();

  useEffect(() => {
    if (id) {
      getMovieVideo(id);
    }
  }, [id]);

  const getMovieVideo = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((item) => item.type === "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];

    setTrailer(trailer);
  };
};

export default useGetMovieTrailer;
