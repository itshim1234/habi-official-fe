import React, { useState, useEffect, useRef } from "react";
import mobileAnimation from "../../assets/videos/mobileAnimation.mp4";
import designIcon from "../../assets/images/Designicon.png";
import thumbNail from "../../assets/images/tumbnail.png";
import Live from "../../assets/images/Liveicon.png";
import trackStages from "../../assets/images/stagesicon.png";
import play from "../../assets/images/Playicon.png";
import line from "../../assets/images/Line.png";

const ConstructionProgress = () => {
  const [videoPlayed, setVideoPlayed] = useState(false); // Track video completion
  const sectionRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoPlayed(true); // Mark video as completed
  };

  return (
    <div
      ref={sectionRef}
      className={`relative h-[450px] md:h-[800px] bg-cover bg-center w-full mt-20 text-white ${
        videoPlayed ? "md:mb-0" : "md:mb-0"
      }`}
    >
      <p className="px-2 md:px-0 flex justify-center text-center inset-0 text-[32px] md:text-[40px] lg:text-[48px] font-giloryB z-20">
        Track all your construction progress
      </p>
      {/* Centered Video */}
      <div className="absolute inset-0 flex items-center justify-center xl:w-[80%] mx-auto top-10 xl:top-16">
        <video
          className="w-full h-full"
          // ref={videoRef}
          src={mobileAnimation}
          // autoPlay={false} // No autoPlay initially
          onEnded={handleVideoEnd}
          playsInline
          autoPlay
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
          <p className="md:text-[24px] font-bold mr-2 inline font-giloryS">
            Design & Documents
          </p>
          <img src={designIcon} alt="" className="inline mb-1 w-6" />
          <p className="md:mt-2 leading-4 md:leading-5 md:text-[16px] font-giloryM">
            The app makes it easy to organize and manage your designs and
            documents in one place. It simplifies the process, so you can
            quickly access your files.
          </p>
        </div>
      </div>

      <div
        className={`absolute flex md:hidden transition-all duration-1000 ${
          videoPlayed
            ? "top-48 left-4 translate-x-0 translate-y-0 opacity-100 delay-[0ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="text-[12px] py-1 px-2 bg-white/40 backdrop-blur-xl rounded-xl border border-white/40 font-giloryM">
          Design & Documents
          <img src={designIcon} alt="" className="inline ml-2 w-4" />
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
          <div className="absolute text-[18px] py-1 text-black px-3 bg-white rounded-xl -top-5 -right-5 font-giloryM">
            Construction on site
          </div>
          <div className="absolute text-[18px] py-1 text-white px-3 bg-black/40 backdrop-blur-xl rounded-full -bottom-5 -left-3 border border-[#7c7c7c] font-giloryM">
            live <img src={Live} alt="" className="inline w-4 ml-2 mb-1" />
          </div>
        </div>
        <img
          src={play}
          alt="play"
          className="m-auto absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div
        className={`absolute flex md:hidden transition-all duration-1000 ${
          videoPlayed
            ? "top-72 left-28 translate-x-0 translate-y-0 opacity-100 delay-[1000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="text-[12px] py-1 px-2 bg-white/40 backdrop-blur-xl rounded-xl border border-white/40 font-giloryM">
          live <img src={Live} alt="" className="inline w-4 ml-1 mb-0.5" />
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
          <h2 className="text-[12px] md:text-[24px] font-giloryS inline">
            Integrated Payment
          </h2>
          <p className="md:mt-2 leading-4 md:leading-5 md:text-[16px] font-giloryM">
            You can manage all your construction payments easily in the app,
            keeping everything in one place. This makes tracking payments simple
            and improves your financial organization.
          </p>
        </div>
      </div>

      <div
        className={`absolute flex md:hidden transition-all duration-1000 ${
          videoPlayed
            ? "bottom-40 right-4 translate-x-0 translate-y-0 opacity-100 delay-[2000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="text-[12px] py-1 px-2 bg-white/40 backdrop-blur-xl rounded-xl border border-white/40 font-giloryM">
          <img src={designIcon} alt="" className="inline mr-2 w-4" />
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
        <div className="relative md:px-4 md:pt-2 md:pb-2 shadow-lg rounded-3xl rounded-tl-none rounded-bl-3xl w-72 md:w-[338px] bg-white backdrop-blur-md border border-r-0 md:border-r border-white/40">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-800 text-[16px] font-giloryS">
              Foundation
            </h3>
            <p className="text-[#7c7c7c] text-xs font-giloryM">Started</p>
          </div>
          <p className="md:text-sm text-black font-giloryM">initial stage</p>
          <p className="text-xs text-[#7c7c7c] inline mr-2 font-giloryM">
            25 May 2024 - 26 May 2024
          </p>
          <div className="flex justify-between items-center">
            <div className="h-3 bg-gray-200 rounded-full mt-2 w-[80%] inline-block">
              <div
                className="h-3 bg-primary rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
            <p className="inline text-black text-sm mt-2 font-giloryM">70%</p>
          </div>
          <div className="absolute text-[18px] p-1 text-white px-3 bg-black/60 rounded-full right-0 md:-right-5 -bottom-5 backdrop-blur-xl border border-[#7c7c7c] font-giloryM">
            <img src={trackStages} alt="" className="inline w-4 mr-2 mb-1" />
            Track Stages
          </div>
        </div>
      </div>

      <div
        className={`absolute flex md:hidden transition-all duration-1000 ${
          videoPlayed
            ? "top-40 right-4 translate-x-0 translate-y-0 opacity-100 delay-[3000ms]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="text-[12px] py-1 px-2 bg-white/40 backdrop-blur-xl rounded-xl border border-white/40 font-giloryM">
          <img src={trackStages} alt="" className="inline w-4 mr-2 mb-0.5" />
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
