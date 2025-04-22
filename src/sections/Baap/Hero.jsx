import React, { useState, useEffect } from "react";
import tabAnimation from "../../assets/videos/tabAnimation.mp4";
import tabAnimationMobile from "../../assets/videos/tabAnimationMobile.mp4";
import arrow from "../../assets/images/ArrowRight.webp";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo2.webp";

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
      <img
        src={logo}
        alt="habi The Way Of Living"
        className="absolute w-20 md:w-32 lg:w-32 2xl:w-40 animation cursor-pointer rounded-full z-40"
      />
      <div
        className="absolute top-5 md:top-10 right-5 md:right-10 z-10 cursor-pointer"
        onClick={handleGoBack}
      >
        <img
          src={arrow}
          alt="Logo"
          className="inline rotate-180 pt-0.5 mr-1 mb-1"
        />
        <p className="inline border-b pb-1 md:text-2xl font-giloryS">Back</p>
      </div>
    </div>
  );
}

export default Hero;

