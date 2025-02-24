import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useLanguage, useSearchedMovieStore } from "../utils/store";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";

const GPTSearchBar = () => {
  const { lanuage } = useLanguage();
  const inputRef = useRef();
  const { setSearchedMovies } = useSearchedMovieStore();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    // const gptQuery =
    //   "Act as a Movie Recommendation System and suggest some movies for the query : " +
    //   inputRef.current.value +
    //   ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Dhol";

    // const gptResult = await openai.chat.completions.create({
    //   model: "gpt-4o",
    //   store: true,
    //   messages: [{ role: "user", content: gptQuery }],
    // });

    const dummyData =
      "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan";
    // const gptMovies = gptResult?.choices[0]?.message?.content.split(",");
    const gptMovies = dummyData.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    setSearchedMovies(gptMovies, tmdbResults);
  };

  return (
    <div className="w-full pt-[40%] md:pt-[10%] flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg w-full md:w-1/2 bg-black grid grid-cols-12 border"
      >
        <input
          className="rounded-lg col-span-9 p-4 m-4 bg-white"
          type="text"
          ref={inputRef}
          placeholder={lang[lanuage].gptSearchPlaceHolder}
        />
        <button
          onClick={handleGptSearchClick}
          className="px-4 py-2 m-4 col-span-3 rounded-lg  bg-red-700 text-white"
        >
          {lang[lanuage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
