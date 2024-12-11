import React, { useState, useEffect } from "react";
import tabAnimation from "../../assets/videos/tabAnimation.mp4";
import tabAnimationMobile from "../../assets/videos/tabAnimationMobile.mp4";
import arrow from "../../assets/images/ArrowRight.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [videoSource, setVideoSource] = useState(
    window.innerWidth <= 768 ? tabAnimationMobile : tabAnimation
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSource(tabAnimationMobile);
      } else {
        setVideoSource(tabAnimation);
      }
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="relative w-full h-screen md:h-[40vh] lg:h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        className={`absolute top-0 left-0 w-full object-cover h-full `}
        autoPlay
        muted
        playsInline
        loading="lazy"
      >
        <source src={videoSource} type="video/mp4" loading="lazy" />
      </video>
      {/* Logo */}
      <div className="absolute top-5 md:top-10 left-5 md:left-10 transform z-10">
        {/* <img src="logo" alt="Logo" className="w-40 md:w-56" /> */}
        <p className="text-[32px] md:text-[40px] lg:text-[48px] font-Samarkan text-primary cursor-pointer w-fit">
          habi
        </p>
      </div>
      <div
        className="absolute top-5 md:top-10 right-5 md:right-10 z-10 cursor-pointer"
        onClick={handleGoBack}
      >
        <img
          src={arrow}
          alt="Logo"
          className="inline rotate-180 pt-0.5 mr-1 mb-1"
        />
        <p className="inline border-b pb-1 md:text-2xl font-giloryS">
          Go back to Website
        </p>
      </div>
    </div>
  );
}

export default Hero;
