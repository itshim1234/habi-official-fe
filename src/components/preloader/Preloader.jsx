import React, { useEffect, useState } from "react";
import preloader from "../../assets/videos/preloader.mp4";

const Preloader = ({ onVideoEnd }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("preloader-video");

    // Listen for video load and end events
    videoElement.onloadeddata = () => setIsVideoLoaded(true);
    videoElement.onended = onVideoEnd;

    return () => {
      videoElement.onloadeddata = null;
      videoElement.onended = null;
    };
  }, [onVideoEnd]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      <video
        id="preloader-video"
        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
        src={preloader}
        autoPlay
        muted
        loop={false}
        playsInline
      ></video>
    </div>
  );
};

export default Preloader;
