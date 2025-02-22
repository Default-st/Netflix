import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Route, Routes } from "react-router";
import Signup from "./Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { userStore } from "../utils/store";
import { useNavigate } from "react-router";

const Body = () => {
  const { user, setUser, logoutUser } = userStore();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        setUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        });
        navigate("/browse");
        // ...
      } else {
        logoutUser();
        navigate("/");
        // User is signed out
        // ...
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>{" "}
      <Route path="/browse" element={<Browse />}></Route>\{" "}
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};

export default Body;
