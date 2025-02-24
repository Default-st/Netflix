import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BACKGROUND_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="background image"
          className="object-cover h-screen md:w-screen"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;
