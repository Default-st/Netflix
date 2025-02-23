import React from "react";
import { lang } from "../utils/languageConstants";
import { useLanguage } from "../utils/store";

const GPTSearchBar = () => {
  const { lanuage } = useLanguage();
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="rounded-lg w-1/2 bg-black grid grid-cols-12">
        <input
          className="rounded-lg col-span-10 p-4 m-4 bg-white"
          type="text"
          placeholder={lang[lanuage].gptSearchPlaceHolder}
        />
        <button className="my-4 mr-4 col-span-2 rounded-lg py-2 px-4 bg-red-700 text-white">
          {lang[lanuage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
