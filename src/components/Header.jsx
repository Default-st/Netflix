import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useGPTStore, useLanguage, userStore } from "../utils/store";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const { user } = userStore();
  const { showGPTSearch, setToggleGPT } = useGPTStore();
  const { lanuage, setLanguage } = useLanguage();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    setToggleGPT();
  };

  return (
    <div className="flex justify-between items-center w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10  flex-col md:flex-row">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />

      {user?.uid?.length > 0 ? (
        <div className="flex gap-4 p-2 items-center">
          {" "}
          {showGPTSearch ? (
            <select
              onChange={(e) => setLanguage(e.target.value)}
              className="p-2 m-2 bg-gray-700 text-white"
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          ) : null}
          <button
            onClick={handleGPTSearchClick}
            className="py-2 px-4 mx-4 my-2 rounded-lg text-white bg-purple-700"
          >
            {showGPTSearch ? "Home" : "GPTSearch"}
          </button>
          <img
            src={user?.photoURL}
            alt="userIcon"
            className="hidden md:block w-8 h-8"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-bold border cursor-pointer rounded-lg p-2"
          >
            Sign Out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
