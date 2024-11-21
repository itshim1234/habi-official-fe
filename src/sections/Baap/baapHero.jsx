import React from "react";
import tabAnimation from "../../assets/videos/tabAnimation.mp4";

function BaapHero() {
  return (
    <div className="relative w-full h-[60vw] md:h-[60vw] lg:h-screen overflow-hidden">
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
      <div className="absolute top-5 right-5 transform -translate-x-1/2 -translate-y-1/2 z-10">
        {/* <img src="logo" alt="Logo" className="w-40 md:w-56" /> */}
        <p>Go back to Website</p>
      </div>
    </div>
  );
}

export default BaapHero;
