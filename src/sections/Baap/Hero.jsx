import React from "react";
import tabAnimation from "../../assets/videos/tabAnimation.mp4";
import arrow from "../../assets/images/ArrowRight.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div className="relative w-full h-[60vw] md:h-[60vw] lg:h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        className={`absolute bottom-0 left-0 w-full`}
        autoPlay
        muted
        playsInline
      >
        <source src={tabAnimation} type="video/mp4" />
      </video>
      {/* Logo */}
      <div className="absolute top-5 left-5 transform -translate-x-1/2 -translate-y-1/2 z-10">
        {/* <img src="logo" alt="Logo" className="w-40 md:w-56" /> */}
        <p>logo</p>
      </div>
      <div
        className="absolute top-8 right-5 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
        onClick={handleGoBack} // Updated to call the function
      >
        <img
          src={arrow}
          alt="Logo"
          className="inline rotate-180 pt-0.5 mr-1 "
        />
        <p className="inline border-b pb-1">Go back to Website</p>
      </div>
    </div>
  );
}

export default Hero;
