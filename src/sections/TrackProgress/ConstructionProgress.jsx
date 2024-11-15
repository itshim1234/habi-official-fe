import React, { useState, useEffect, useRef } from "react";
import mobileAnimation from "../../assets/videos/mobileAnimation.mp4";
import designIcon from "../../assets/images/Designicon.png";
import thumbNail from "../../assets/images/tumbnail.png";
import Live from "../../assets/images/Liveicon.png";
import trackStages from "../../assets/images/stagesicon.png";

const ConstructionProgress = () => {
  const [isVisible, setIsVisible] = useState(false); // Detect section visibility
  const [videoPlayed, setVideoPlayed] = useState(false); // Track video completion
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true); // Section is visible
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && videoRef.current && !videoPlayed) {
      videoRef.current.play(); // Play video when section is visible and video has not played
    }
  }, [isVisible, videoPlayed]);

  const handleVideoEnd = () => {
    setVideoPlayed(true); // Mark video as completed
  };

  return (
    <div
      ref={sectionRef}
      className="relative h-[600px] md:h-[800px] bg-cover bg-center w-full mb-20 mt-20 text-white"
    >
      <p className="absolute flex justify-center text-center inset-0 text-[32px] md:text-[40px] lg:text-[48px] z-10">
        Track all your construction progress
      </p>
      {/* Centered Video */}
      <div className="absolute inset-0 flex items-center justify-center  xl:w-[80%] mx-auto">
        <video
          className=""
          ref={videoRef}
          src={mobileAnimation}
          autoPlay={false} // No autoPlay initially
          onEnded={handleVideoEnd}
          muted
        ></video>
      </div>
      {/* Card Section */}
      <div
        className={`absolute flex transition-all duration-1000 ${
          videoPlayed
            ? "top-32 md:top-60 lg:top-40 md:left-10 lg:left-20 translate-x-0 translate-y-0 opacity-100 delay-[0ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="p-2 md:px-6 md:pt-4 md:pb-6 shadow-black shadow-lg rounded-r-3xl md:rounded-3xl w-36 md:w-[338px] bg-white/20 backdrop-blur-md border border-l-0 md:border-l border-white/40">
          <h2 className="text-[14px] md:text-[24px] font-bold md:mr-2 inline">
            Design & Documents
          </h2>
          <img src={designIcon} alt="" className="hidden md:inline mb-1" />
          <p className="mt-2 leading-4 md:leading-5 text-[12px] md:text-[16px]">
            The app makes it easy to organize and manage your designs and
            documents in one place. It simplifies the process, so you can
            quickly access your files.
          </p>
        </div>
      </div>

      <div
        className={`absolute flex transition-all duration-1000 ${
          videoPlayed
            ? "bottom-10 md:bottom-20 lg:bottom-40 md:left-10 lg:left-20 translate-x-0 translate-y-0 opacity-100 delay-[2000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="relative w-40 h-20 md:w-[304px] md:h-[112px] shadow-lg rounded-r-2xl md:rounded-2xl  bg-white/20 backdrop-blur-md border border-l-0 md:border-l border-white/40">
          <div className="absolute inset-0 z-0 bg-cover">
            <img
              src={thumbNail}
              alt=""
              className="w-full h-full object-cover rounded-r-2xl md:rounded-2xl"
            />
          </div>
          <div className="absolute text-[12px] py-1 text-black px-2 bg-white rounded-xl -top-2.5 -right-3">
            Construction on site
          </div>
          <div className="absolute text-[12px] py-1 text-black px-2 bg-white rounded-xl -bottom-2.5">
            live <img src={Live} alt="" className="inline w-4 ml-1" />
          </div>
        </div>
      </div>

      <div
        className={`absolute flex transition-all duration-1000 ${
          videoPlayed
            ? "bottom-0 md:bottom-20 lg:bottom-40 right-0 md:right-10 lg:right-20 translate-x-0 translate-y-0 opacity-100 delay-[3000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="p-2 md:px-6 md:pt-4 md:pb-6 shadow-lg rounded-l-3xl md:rounded-3xl w-36 md:w-[338px] bg-white/20 backdrop-blur-md border border-r-0 md:border-r border-white/40">
          <img
            src={designIcon}
            alt=""
            className="hidden md:inline mb-1 md:mr-2"
          />
          <h2 className="text-[14px] md:text-[24px] font-bold inline">
            Integrated Payment
          </h2>
          <p className="mt-2 leading-4 md:leading-5 text-[12px] md:text-[16px]">
            You can manage all your construction payments easily in the app,
            keeping everything in one place. This makes tracking payments simple
            and improves your financial organization.
          </p>
        </div>
      </div>
      <div
        className={`absolute flex transition-all duration-1000 ${
          videoPlayed
            ? "top-40 md:top-60 lg:top-40 right-0 md:right-10 lg:right-20 translate-x-0 translate-y-0 opacity-100 delay-[1000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="relative p-2 md:px-6 md:pt-4 md:pb-6 shadow-lg rounded-3xl rounded-tl-none rounded-bl-3xl w-36 md:w-[338px] bg-white backdrop-blur-md border border-r-0 md:border-r border-white/40">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Soil Testing</h3>
            <p>Started</p>
          </div>
          <p className="text-sm text-black">initial stage</p>
          <p className="text-sm text-gray-500 inline mr-2">
            25 May 2024 - 26 May 2024
          </p>
          <div className="flex justify-between items-center">
            <div className="h-3 bg-gray-200 rounded-full mt-2 w-[80%] inline-block">
              <div
                className="h-3 bg-primary rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
            <p className="inline text-black text-sm mt-2">70%</p>
          </div>
          <div className="absolute text-[12px] py-1 text-white px-2 bg-black/70 rounded-xl -right-4 -bottom-2.5 backdrop-blur-md">
            <img src={trackStages} alt="" className="inline w-4 ml-1" /> Track
            Stages
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionProgress;
