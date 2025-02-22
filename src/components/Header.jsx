import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { userStore } from "../utils/store";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const { user } = userStore();
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
  return (
    <div className="flex justify-between items-center w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />

      {user?.uid?.length > 0 ? (
        <div className="flex gap-4 p-2 items-center">
          <img src={user?.photoURL} alt="userIcon" className="w-8 h-8" />
          <button
            onClick={handleSignOut}
            className="font-bold border cursor-pointer rounded-lg p-2"
          >
            Sign Out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
