import React from "react";
import baapWorking from "../../assets/videos/workingAnimation.mp4";

function BaapWorking() {
  return (
    <div className="relative w-full h-[60vw] md:h-[60vw] lg:h-screen overflow-hidden">
      <video className="w-full h-full" autoPlay muted playsInline>
        <source src={baapWorking} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BaapWorking;
