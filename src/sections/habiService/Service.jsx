import React, { useState, useEffect } from "react";
import model from "../../assets/videos/Model.mp4";
import Loader from "./Loader";
import SparkleButton from "../../components/SparkleButton";
import "./style.css";

function Service({ toggleView }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isVideoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 5); // Cycle through 0 to 4
      }, 2900); // 3 seconds
    }

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isVideoPlaying]);

  const items = ["Design", "Approvals", "Home Loan", "Build", "Interior"];

  const handleVideoPlay = () => {
    setIsVideoPlaying(true); // Start stages when video starts playing
  };

  return (
    <div className="flex flex-col justify-center text-center bg-black text-white relative w-full h-fit">
      <hr className="bg-[#f8f8ff] p-0 m-0" />

      <div
        className="flex items-center w-fit mt-[57px] md:mt-0 md:absolute md:top-[100px] md:left-0"
        onClick={toggleView}
      >
        <SparkleButton text="BaaP" />
      </div>

      <h1 className="text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] text-white font-giloryB mt-[80px] md:mt-[56px]">
        habi homes
      </h1>
      <p className="text-[24px] md:text-[32px] lg:text-[40px] font-giloryB mt-[40px]">
        One-Stop Design Centric
      </p>
      <h1 className="text-[18px] md:text-[24px] lg:text-[32px] font-giloryS">
        Construction Company
      </h1>
      <p className="text-[16px] lg:text-[18px] 2xl:text-2xl font-giloryM w-[309px] md:w-[424px] 2xl:w-[480px] mx-auto mt-4 2xl:mt-6 mb-10">
        Tailored personalized living spaces that are custom-designed to meet the
        unique needs and preferences of each client. Every home reflects the
        client’s individual taste, lifestyle, and standard of living, creating a
        space that embodies their personal style and becomes an extension of
        their identity.
      </p>

      <video
        className="object-cover w-full h-[450px] md:h-[650px] lg:h-[100vh] xl:w-[50vw] 2xl:w-[70vw] 2xl:h-[86vh] mx-auto"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoReady(true)} // Set flag when video is ready
        onPlay={handleVideoPlay} // Trigger when video starts playing
      >
        <source src={model} type="video/mp4" />
      </video>

      {isVideoReady && isVideoPlaying && (
        <div className="relative w-[90vw] md:w-[70vw] lg:w-[40vw] mx-auto mb-10 mt-0">
          <Loader />
          <div className="mt-6 flex justify-between highlight-container text-[#7c7c7c]">
            {items.map((item, index) => (
              <p
                key={index}
                className={`highlight-item ${
                  index === activeIndex
                    ? "text-lg md:text-2xl text-white font-giloryS"
                    : "font-giloryM"
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
