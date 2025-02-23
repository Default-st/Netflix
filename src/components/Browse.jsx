import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useGPTStore } from "../utils/store";

const Browse = () => {
  useNowPlayingMovies();
  const { showGPTSearch } = useGPTStore();
  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
      MainContainer
        VideoBackground
        VideoTitle
      SecondaryContainer
        MovieList*n
          Card*n
      */}
    </div>
  );
};

export default Browse;
