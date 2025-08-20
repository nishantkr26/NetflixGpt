import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/Validate";

const SignIn = () => {
  const [newAccount, setNewAccount] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    setNewAccount(!newAccount);
  };

  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    if (message) {
      setErrorMessage(message);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
          alt="homeImage"
          //   className="absolute"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 my-36  mx-auto right-0 left-0 bg-black text-white flex flex-col w-1/4"
      >
        {!newAccount ? (
          <h1 className="font-bold text-3xl p-2 m-4 mx-0 text-white">
            Sign In
          </h1>
        ) : (
          <h1 className="font-bold text-3xl p-2 m-4 mx-0 text-white">
            Sign Up
          </h1>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 m-4 bg-gray-700"
        />
        {newAccount && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 m-4 bg-gray-700"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 m-4 bg-gray-700"
        />
        {errorMessage && (
          <p className="p-2 m-1 text-red-600">{errorMessage}</p>
        )}
        <button
          className="bg-red-600 text-white p-2 m-4"
          onClick={handleButtonClick}
        >
          {!newAccount ? "Sign Up" : "Sign In"}
        </button>
        {!newAccount ? (
          <p
            className="p-4 px-0 m-4 text-white cursor-pointer"
            onClick={handleSignUp}
          >
            New to Netflix? Sign Up Now
          </p>
        ) : (
          <p
            className="p-4 px-0 m-4  text-white cursor-pointer"
            onClick={handleSignUp}
          >
            Already have an Account ? Sign In Now
          </p>
        )}
      </form>
    </div>
  );
};

export default SignIn;
