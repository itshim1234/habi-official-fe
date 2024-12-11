import React, { useState } from "react";
import herobackground from "../../assets/videos/heroBackground.mp4";
import scroll from "../../assets/images/scroll.png";
import ConsultationPopup from "./ConsultationPopup";
import logo from "../../assets/images/Logo1.png";
import { useNavigate } from "react-router-dom";
import Hamburger from "../../components/Hamburger";

import "./hero.css";

function Hero({ scrollToProjects, scrollToCostEstimator }) {
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu visibility state

  // Toggle popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-[300px] h-[460px] md:h-[750px] lg:h-screen w-screen bg-cover bg-center">
      {/* Video background */}
      <div className="absolute inset-0 z-0 bg-cover">
        <video
          className="object-cover w-screen h-[450px] md:h-[750px] lg:h-screen"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={herobackground} type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Overlay content */}
      <div className="relative z-20 text-white justify-center text-center top-[45%] w-fit mx-auto">
        {/* Background shadow layer */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity for shadow intensity
            filter: "blur(16px)",

            // Blur effect for a softer shadow
            borderRadius: "50px", // Optional, adjust for rounded corners if needed
          }}
        ></div>

        {/* Main text */}
        <div className="relative text-[48px] md:text-[85px] lg:text-[80px] 2xl:text-[114px] font-giloryB font-semibold leading-[50px] md:leading-[80px] lg:leading-[90px] 2xl:leading-[120px]">
          {/* Blurred background above the text */}
          <div
            className="absolute -top-3 left-0 right-0 mx-auto z-40"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
              filter: "blur(50px)", // Blur effect for shadow
              height: "40%", // Adjust height as needed to cover the area above
              borderRadius: "5px", // Optional for rounded edges
            }}
          ></div>

          {/* Text with separate divs */}
          <div className="relative">
            <div>Redefining the</div>
            <div>way of living</div>
          </div>
        </div>
      </div>
      <div className="absolute z-20 text-white justify-center text-center right-[16px] md:right-[32px] lg:right-[82px] top-[20px] md:top-[40px]">
        <button className="flex items-center justify-between px-5 w-[140px] md:w-[180px] h-[56px] md:h-[60px] rounded-lg border-2 border-white/20 bg-black/25 backdrop-blur-md text-white font-semibold">
          <span className="text-[18px] md:text-[24px] font-giloryS">Login</span>
          <span className="text-lg mb-1 text-[#c0c0c0]">|</span>

          <div onChange={toggleMenu}>
            <Hamburger />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 md:top-32 right-3 md:right-10 lg:right-20 z-30 flex flex-col bg-black/50 backdrop-blur-md px-5 py-2 md:py-3 border border-[#7c7c7c] rounded-lg font-giloryS">
          <button
            className="text-white text-[18px] md:text-[24px]"
            onClick={() => {
              navigate("/baap");
            }}
          >
            Product
          </button>
          <hr className="my-2 md:my-4 w-[70%] mx-auto" />
          <button
            className="text-white text-[18px] md:text-[24px]"
            onClick={scrollToCostEstimator}
          >
            Cost Estimator
          </button>
          <hr className="my-2 md:my-4 w-[70%] mx-auto" />
          <button
            className="text-white text-[18px] md:text-[24px]"
            onClick={() => {
              navigate("/");
            }}
          >
            Blog
          </button>
        </div>
      )}

      <div
        className="absolute z-20 justify-center text-center left-4 md:left-10 lg:left-10 top-0 md:w-40"
        onClick={() => {
          navigate("/"); // Navigate to the home page
          window.location.reload(); // Refresh the page
        }}
      >
        <img
          src={logo}
          alt="habi The Way Of Living"
          className="w-20 md:w-32 lg:w-32 2xl:w-40 animation cursor-pointer rounded-full"
        />
        <p className="absolute font-giloryM text-white mt-1 text-xs md:text-sm md:left-3 lg:left-0 -bottom-4 md:bottom-0 lg:text-lg 2xl:bottom-2 2xl:left-3">
          The way of Living
        </p>
      </div>

      <div className="relative z-20 text-white justify-center text-center top-[50%] flex space-x-4 md:space-x-12 text-md md:text-[20px] 2xl:text-[24px]">
        <button
          className="px-5 w-[160] md:w-[230px] 2xl:w-[275px] h-12 md:h-[60px] lg:h-[60px] 2xl:h-[80px] rounded-xl border-2 border-white/20 bg-black/30 backdrop-blur text-white flex items-center justify-center font-giloryS"
          onClick={scrollToProjects}
        >
          Explore Projects
        </button>

        <button
          className="px-5 w-[160] md:w-[230px] 2xl:w-[275px] h-12 md:h-[60px] lg:h-[60px] 2xl:h-[80px] rounded-xl bg-primary text-white flex items-center justify-center font-giloryS"
          onClick={togglePopup} // Show the popup on click
        >
          Free Consultation
        </button>
      </div>
      <div className="relative z-20 text-white justify-center text-center top-[55%] hidden 2xl:flex space-x-4 md:space-x-12 text-md md:text-[24px] ">
        <img src={scroll} alt="scroll button" />
      </div>
      {isPopupVisible && (
        <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 xl:top-[58%] z-50 ">
          <ConsultationPopup onClose={togglePopup} />
        </div>
      )}
    </div>
  );
}

export default Hero;
