import React, { useState } from "react";
import Profile from "./Profile";
import { Outlet, Link } from "react-router-dom";
import { about } from "../constants";
import FAQ from "./FAQ";
const About = () => {
  const [showProfile, setShowProfile] = useState(true);
  return (
    <div className="about">
      <p className="my-4 text-center">
        {showProfile ? (
          <>
            <Link to={"/Aboutus"}>
              <button
                className="bg-red-600 border rounded px-2 h-10 "
                onClick={() => setShowProfile(false)}
              >
                Show the Profile
              </button>
            </Link>
          </>
        ) : (
          <Link to={"Profile"}>
            <button
              className="bg-blue-600 border rounded px-2 h-10 "
              onClick={() => setShowProfile(true)}
            >
              Hide The Profile
            </button>
            <Profile />
          </Link>
        )}
      </p>
      <div className="flex justify-around max-md:flex-col">
        <div className="justify-center  ">
          <h1>
            <span className="text-6xl my-8 space-y-10 font-bold text-neutral-800 ">
              {" "}
              Welcome to <br /> The world of <br />{" "}
            </span>
          </h1>
          <h1 className="my-2">
            <span className="text-blue-600 rounded-lg text-6xl">Ecommerce</span>
          </h1>
          <h4 className="text-2xl  text-neutral-800">
            "Selling only the best things online at{" "}
            <span className="text-2xl text-blue-600"> Flipzon</span>"
          </h4>
        </div>
        <div className="about-right w-1/2 max-md:w-full">
          <img src={about} alt="Food Image" className="" />
        </div>
      </div>
      <FAQ />
    </div>
  );
};
export default About;
