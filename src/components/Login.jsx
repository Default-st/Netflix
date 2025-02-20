import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState("");
  const inputEmailRef = useRef(null);
  const inputNameRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const message = checkValidateData(
      inputEmailRef.current.value,
      inputPasswordRef.current.value
    );
    if (message) {
      setError(message);
    }
  };
  return (
    <div className="h-[100vh] w-[100vw]">
      <Header />

      <img
        className="absolute w-full h-full"
        src="
https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
      />
      <form
        onSubmit={handleFormSubmit}
        className="rounded-lg gap-4 text-white lg:w-1/4 sm:w-1/3 p-10 absolute mx-auto left-0 right-0 my-48 flex flex-col  bg-black opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>{" "}
        {!isSignInForm ? (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3  bg-gray-700"
            ref={inputNameRef}
          />
        ) : null}{" "}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3  bg-gray-700"
          ref={inputEmailRef}
        />{" "}
        <input
          type="password"
          placeholder="Password"
          className="p-3  bg-gray-700"
          ref={inputPasswordRef}
        />
        <p className="text-red-400 font-bold text-lg py-2">{error}</p>
        <button
          type="submit"
          className="p-3 bg-red-700 rounded-lg cursor-pointer"
        >
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="py-4 cursor-pointer" onClick={() => toggleSignInForm()}>
            New to Netflix? Sign Up Now
          </p>
        ) : (
          <p className="py-4 cursor-pointer" onClick={() => toggleSignInForm()}>
            Already a Member? Sign In Now
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
