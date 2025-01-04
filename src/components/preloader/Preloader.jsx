import React from "react";
import preloader from "../../assets/videos/preloader.mp4";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {/* Video element */}
      <video
        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
        src={preloader} // Replace with the actual path to your video
        autoPlay
        muted
        loop={false}
        playsInline
      ></video>
    </div>
  );
};

export default Preloader;
