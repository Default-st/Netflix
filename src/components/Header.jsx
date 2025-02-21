import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { userStore } from "../utils/store";

const Header = () => {
  const navigate = useNavigate();
  const { user } = userStore();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-between items-center w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {console.log(user)}
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
