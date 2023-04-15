import React from "react";

const Footer = () => {
  return (
    <div className="flex mob:flex-col justify-around w-full shadow h-14 bg-red-500 text-blue-dark text-center leading-[3.5rem] bottom-0 fixed z-40 max-md:flex-col max-md:h-20">
      <span className="text-left text-white mob:text-xs mob:text-center max-md:text-center">
        Hey.... Thanks for using Flipzon
      </span>
      <span className="text-center mob:text-xs text-white">
        Developed by Anubhav
      </span>
    </div>
  );
};

export default Footer;
