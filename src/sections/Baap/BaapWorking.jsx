import React, { useState, useEffect } from "react";
import baapWorking from "../../assets/videos/workingAnimation.mp4";
import workingAnimationMobile from "../../assets/videos/workingAnimationMobile.mp4";

function BaapWorking() {
  const [videoSource, setVideoSource] = useState(
    window.innerWidth <= 768 ? workingAnimationMobile : baapWorking
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSource(workingAnimationMobile);
      } else {
        setVideoSource(baapWorking);
      }
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative w-full h-screen md:h-[60vh] lg:h-screen">
      <video
        className="w-full h-full"
        autoPlay
        muted
        playsInline
        loop
        loading="lazy"
      >
        <source src={videoSource} type="video/mp4" loading="lazy" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BaapWorking;
