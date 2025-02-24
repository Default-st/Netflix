import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-10 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg sm:w-1/2 w-1/4">
        {overview}
      </p>
      <div className="my-2 md:m-0 text-lg space-x-4">
        <button className=" hover:opacity-80 cursor-pointer rounded-lg border md:py-4 md:px-12 py-2 px-4 bg-white text-black">
          Play
        </button>
        <button className="hidden md:inline-block cursor-pointer opacity-70 rounded-lg border p-4 px-12 bg-gray-600 text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
