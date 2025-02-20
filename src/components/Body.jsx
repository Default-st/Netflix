import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Route, Routes } from "react-router";
import Signup from "./Signup";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>{" "}
      <Route path="/browse" element={<Browse />}></Route>\{" "}
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};

export default Body;
