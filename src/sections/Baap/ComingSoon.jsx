import React from "react";
import next from "../../assets/videos/comingSoon.mp4";

function ComingSoon() {
  return (
    <div className="relative w-full h-[20vw] md:h-[60vw] lg:h-[50vh] overflow-hidden text-white mt-20 border-b border-[#7c7c7c]">
      <video
        className="absolute w-full lg:h-[50vh] opacity-50"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src={next} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-[24px] md:text-[48px] absolute z-10 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-center bg-black font-giloryS">
        Coming soon
      </p>
    </div>
  );
}

export default ComingSoon;
