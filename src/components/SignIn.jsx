import React from "react";
import Header from "./Header";

const SignIn = () => {
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
      <div>
        
      </div>
      <form className="relative bg-black flex flex-col w-1/4 align-middle justify-center items-center "> 
        <input type="text" placeholder="Email" className="p-2 m-4" />
        <input type="password" placeholder="Password" className="p-2 m-4" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
