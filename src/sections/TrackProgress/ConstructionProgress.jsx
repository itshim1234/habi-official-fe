import React, { useState, useEffect, useRef } from "react";
import mobileAnimation from "../../assets/videos/mobileAnimation.mp4";
import designIcon from "../../assets/images/Designicon.png";
import thumbNail from "../../assets/images/tumbnail.png";
import Live from "../../assets/images/Liveicon.png";
import trackStages from "../../assets/images/stagesicon.png";
import play from "../../assets/images/Playicon.png";
import line from "../../assets/images/Line.png";

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
      className="relative h-[600px] md:h-[800px] bg-cover bg-center w-full  mt-20 text-white"
    >
      <p className="px-10 md:px-0 absolute flex justify-center text-center inset-0 text-[32px] md:text-[40px] lg:text-[48px] z-10">
        Track all your construction progress
      </p>
      {/* Centered Video */}
      <div className="absolute inset-0 flex items-center justify-center xl:w-[80%] mx-auto xl:top-20">
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
        className={`absolute hidden md:flex transition-all duration-1000 ${
          videoPlayed
            ? "md:top-64 lg:top-40 md:left-6 lg:left-10 xl:left-[4%] 2xl:left-[6%] translate-x-0 translate-y-0 opacity-100 delay-[0ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="md:px-6 md:pt-4 md:pb-6 rounded-r-3xl md:rounded-3xl w-64 md:w-[338px] bg-white/20 backdrop-blur-md border border-l-0 md:border-l border-white/40 text-right">
          <p className="md:text-[24px] font-bold mr-2 inline">
            Design & Documents
          </p>
          <img src={designIcon} alt="" className="inline mb-1 w-6" />
          <p className="md:mt-2 leading-4 md:leading-5 text-[10px] md:text-[16px]">
            The app makes it easy to organize and manage your designs and
            documents in one place. It simplifies the process, so you can
            quickly access your files.
          </p>
        </div>
      </div>

      <div
        className={`absolute flex md:hidden transition-all duration-1000 ${
          videoPlayed
            ? "top-40 left-2 translate-x-0 translate-y-0 opacity-100 delay-[0ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="text-[12px] py-1 text-black px-1 bg-white rounded-xl">
          Design & Documents
          <img src={designIcon} alt="" className="inline ml-2 w-6" />
        </div>
      </div>

      <div
        className={`absolute hidden md:flex transition-all duration-1000 ${
          videoPlayed
            ? "md:bottom-10 lg:bottom-40 md:left-6 lg:left-10 xl:left-[4%] 2xl:left-[6%] translate-x-0 translate-y-0 opacity-100 delay-[2000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="relative md:w-[304px] md:h-[112px] shadow-lg rounded-r-2xl md:rounded-2xl  bg-white/20 backdrop-blur-md border border-l-0 md:border-l border-white/40">
          <div className="absolute inset-0 z-0 bg-cover">
            <img
              src={thumbNail}
              alt=""
              className="w-full h-full object-cover rounded-r-2xl md:rounded-2xl"
            />
          </div>
          <div className="absolute text-[12px] py-1 text-black px-3 bg-white rounded-xl -top-2.5 -right-5">
            Construction on site
          </div>
          <div className="absolute text-[12px] py-1 text-white px-3 bg-black/40 backdrop-blur-lg rounded-full -bottom-2.5">
            live <img src={Live} alt="" className="inline w-4 ml-1" />
          </div>
        </div>
        <img
          src={play}
          alt="play"
          className="m-auto absolute left-16 md:left-36 top-1/3"
        />
      </div>

      <div
        className={`absolute flex md:hidden transition-all duration-1000 ${
          videoPlayed
            ? "top-80 left-2 translate-x-0 translate-y-0 opacity-100 delay-[1000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="relative flex text-[12px] py-2 text-black px-3 bg-white rounded-xl">
          Construction on site
          <div className="absolute text-[12px] py-1 text-white px-3 bg-black/40 backdrop-blur-lg rounded-full right-0 -bottom-5">
            live <img src={Live} alt="" className="inline w-4 ml-1" />
          </div>
        </div>
      </div>

      <div
        className={`absolute hidden md:flex transition-all duration-1000 ${
          videoPlayed
            ? "md:bottom-40 lg:bottom-40 md:right-6 lg:right-10 xl:right-[4%] 2xl:right-[6%] translate-x-0 translate-y-0 opacity-100 delay-[3000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="md:px-6 md:pt-4 md:pb-6 shadow-lg rounded-l-3xl md:rounded-3xl w-72 md:w-[338px] bg-white/20 backdrop-blur-md border border-r-0 md:border-r border-white/40">
          <img src={designIcon} alt="" className="inline mb-1 mr-2 w-6" />
          <h2 className="text-[12px] md:text-[24px] font-bold inline">
            Integrated Payment
          </h2>
          <p className="md:mt-2 leading-4 md:leading-5 text-[10px] md:text-[16px]">
            You can manage all your construction payments easily in the app,
            keeping everything in one place. This makes tracking payments simple
            and improves your financial organization.
          </p>
        </div>
      </div>

      <div
        className={`absolute flex md:hidden transition-all duration-1000 ${
          videoPlayed
            ? "bottom-40 right-2 translate-x-0 translate-y-0 opacity-100 delay-[2000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="text-[12px] py-1 text-black px-3 bg-white rounded-xl -top-2.5 -right-5">
          <img src={designIcon} alt="" className="inline mb-1 mr-2 w-6" />
          Integrated payment
        </div>
      </div>
      <div
        className={`absolute hidden md:flex transition-all duration-1000 ${
          videoPlayed
            ? "md:top-32 lg:top-40 md:right-6 lg:right-10 xl:right-[4%] 2xl:right-[6%]  translate-x-0 translate-y-0 opacity-100 delay-[1000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="relative md:px-6 md:pt-4 md:pb-6 shadow-lg rounded-3xl rounded-tl-none rounded-bl-3xl w-72 md:w-[338px] bg-white backdrop-blur-md border border-r-0 md:border-r border-white/40">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-800 text-[14px]">Foundation</h3>
            <p className="text-black text-xs">Started</p>
          </div>
          <p className="text-sm md:text-sm text-black">initial stage</p>
          <p className="text-xs text-gray-500 inline mr-2">
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
          <div className="absolute text-[12px] p-1 text-white px-3 bg-black/60 rounded-full right-0 md:-right-5 -bottom-2.5 backdrop-blur-xl">
            <img src={trackStages} alt="" className="inline w-4 mr-1 mb-0.5" />
            Track Stages
          </div>
        </div>
      </div>

      <div
        className={`absolute flex md:hidden transition-all duration-1000 ${
          videoPlayed
            ? "top-60 right-2 translate-x-0 translate-y-0 opacity-100 delay-[3000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="text-[12px] py-1 text-black px-2 bg-white rounded-xl -top-2.5 -right-5">
          <img src={trackStages} alt="" className="inline w-4 mr-1 mb-0.5" />
          Track Construction
        </div>
      </div>
      <img
        src={line}
        alt=""
        className={`absolute left-1/3 top-1/3  ${
          videoPlayed ? "lg:flex hidden" : "hidden"
        }`}
      />
      <img
        src={line}
        alt=""
        className={`absolute left-2/3 top-1/3 ${
          videoPlayed ? "lg:flex hidden" : "hidden"
        }`}
      />
    </div>
  );
};

export default ConstructionProgress;
