import React, { useEffect, useState } from "react";
import tabAnimation from "../../assets/videos/tabAnimation.mp4";
import tabAnimationMobile from "../../assets/videos/TabanimationMobile.mp4";

function BaapHero() {
  const [videoSource, setVideoSource] = useState(tabAnimation);

  useEffect(() => {
    const updateVideoSource = () => {
      if (window.innerWidth <= 768) {
        setVideoSource(tabAnimationMobile); // Mobile video
      } else {
        setVideoSource(tabAnimation); // Desktop video
      }
    };

    updateVideoSource(); // Set the initial video source
    window.addEventListener("resize", updateVideoSource); // Listen for resize events

    return () => {
      window.removeEventListener("resize", updateVideoSource); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className={`absolute bottom-0 left-0 w-full`}
        autoPlay
        muted
        playsInline
      >
        <source src={videoSource} type="video/mp4" />
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
