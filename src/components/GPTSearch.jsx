import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BACKGROUND_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div>
        <img className="absolute w-full h-full -z-10" src={BACKGROUND_IMG} />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
