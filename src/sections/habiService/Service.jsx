import React, { useState, useEffect } from "react";
import model from "../../assets/videos/Model.mp4";
import arrow from "../../assets/images/ArrowRight.png";
import Loader from "./Loader";
import SparkleButton from "../../components/SparkleButton";
import "./style.css";

function Service({ toggleView }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    let interval;
    if (isVideoReady) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 5); // Cycle through 0 to 4
      }, 3000); // 3 seconds
    }
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isVideoReady]);

  const items = ["Design", "Approvals", "Home Loan", "Build", "Interior"];

  return (
    <div className="flex flex-col justify-center text-center bg-black text-white relative w-full h-fit">
      <hr className="bg-[#f8f8ff] p-0 m-0" />

      {/* <button
        className="rotate-border flex items-center w-fit mt-[57px] md:mt-0 md:absolute md:top-[100px] md:left-0 backdrop-blur-[12.5px] bg-slate-50 bg-opacity-30 p-5 rounded-r-xl border-2 border-l-0 border-white"
        onClick={toggleView}
      >
        <span className="mr-3">BaaP</span>
        <img src={arrow} alt="" />
      </button> */}
      <div
        className="flex items-center w-fit mt-[57px] md:mt-0 md:absolute md:top-[100px] md:left-0"
        onClick={toggleView}
      >
        <SparkleButton text="BaaP" />
      </div>

      <h1 className="text-[32px] md:text-[40px] lg:text-[48px] text-white font-giloryB mt-[22px] md:mt-[56px]">
        habi homes
      </h1>
      <p className="text-[24px] md:text-[32px] lg:text-[40px] font-giloryB mt-[80px]">
        One-Stop Design Centric
      </p>
      <p className="text-[18px] md:text-[24px] lg:text-[32px] font-giloryS">
        Construction Company
      </p>
      <p className="text-[16px] lg:text-[18px] font-giloryM w-[309px] md:w-[424px] mx-auto mt-4 mb-10">
        Tailored personalized living spaces that are custom-designed to meet the
        unique needs and preferences of each client. Every home reflects the
        client’s individual taste, lifestyle, and standard of living, creating a
        space that embodies their personal style and becomes an extension of
        their identity.
      </p>
      <video
        className="object-cover w-full h-[450px] md:h-[650px] lg:h-[88vh]"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoReady(true)} // Set flag when video is ready
      >
        <source src={model} type="video/mp4" />
      </video>
      {isVideoReady && (
        <div className="relative w-[85vw] md:w-[70vw] lg:w-[40vw] mx-auto my-6">
          <Loader />
          <div className="mt-6 flex justify-between highlight-container text-[#7c7c7c]">
            {items.map((item, index) => (
              <p
                key={index}
                className={`highlight-item ${
                  index === activeIndex ? "text-lg md:text-2xl text-white" : ""
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
      <hr className="bg-[#f8f8ff] p-0 m-0" />
    </div>
  );
}

export default Service;
