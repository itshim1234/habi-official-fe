import React, { useState, useEffect } from "react";
import herobackground from "../../assets/videos/heroBackground.mp4";
import scroll from "../../assets/images/scroll.png";
import ConsultationPopup from "./ConsultationPopup";
import logo from "../../assets/images/mainLogo.png";
import { useNavigate } from "react-router-dom";
import Hamburger from "../../components/Hamburger";

import "./hero.css";

function Hero({ scrollToProjects }) {
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
  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [isPopupVisible]);

  return (
    <div className="relative min-h-[300px] h-[460px] md:h-[750px] lg:h-screen w-screen bg-cover bg-center">
      {/* Video background */}
      <div className="absolute inset-0 z-0 bg-cover top-6 md:top-0">
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
      <div className="absolute z-20 text-white justify-center text-center right-[4px] md:right-[32px] lg:right-[82px] top-[20px] md:top-[40px]">
        <button className="flex items-center justify-between px-2 md:px-5 w-[250px] md:w-[360px] lg:w-[480px] 2xl:w-[550px] h-[40px] md:h-[50px] 2xl:h-[60px] rounded-lg border-2 border-white/20 bg-black/25 backdrop-blur-md text-white font-semibold">
          <span
            className="text-[14px] md:text-[20px] 2xl:text-[24px] font-giloryS pb-0.5 leading-4"
            onClick={() => navigate("/Construction-Cost-Calculator")}
          >
            <h1>Construction Cost Calculator</h1>
          </span>
          <span className="text-lg mb-1 text-[#c0c0c0] hidden md:block">|</span>
          <span
            className="text-[18px] md:text-[20px] 2xl:text-[24px] font-giloryS pb-0.5 hidden lg:block"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1J51DKaEezb1tnUWPZZo10pFhLEmU0Oxu/view?usp=sharing",
                "_blank"
              ); // Open the link in a new tab
            }}
          >
            Brochure
          </span>
          <span className="text-lg mb-1 text-[#c0c0c0] md:hidden lg:block">
            |
          </span>
          <div onChange={toggleMenu}>
            <Hamburger />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 md:top-28 right-3 md:right-8 lg:right-20 z-30 flex flex-col bg-black/50 backdrop-blur-md px-3 py-2 md:py-4 border border-[#7c7c7c] rounded-lg font-giloryS">
          <button
            className="text-white text-[18px]"
            onClick={() => {
              navigate("/");
            }}
          >
            Blog
          </button>
          <hr className="my-2 md:my-2 w-[70%] mx-auto" />
          <button
            className="text-white text-[18px]"
            onClick={() => {
              navigate("/baap");
            }}
          >
            Product
          </button>
          <hr className="my-2 md:my-2 w-[70%] mx-auto lg:hidden" />

          <button
            className="text-white text-[18px] lg:hidden"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1J51DKaEezb1tnUWPZZo10pFhLEmU0Oxu/view?usp=sharing",
                "_blank"
              ); // Open the link in a new tab
            }}
          >
            Brochure
          </button>
        </div>
      )}

      <div
        className="absolute w-28 md:w-36 lg:w-40 2xl:w-44 z-40 justify-center left-[16px] md:left-[32px] lg:left-[82px] top-[20px] md:top-[40px] cursor-pointer"
        onClick={() => {
          navigate("/"); // Navigate to the home page
          window.location.reload(); // Refresh the page
        }}
      >
        <img
          src={logo}
          alt="Home construction Bengaluru"
          className="w-28 md:w-36 lg:w-40 2xl:w-44"
        />
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
        <img src={scroll} alt="House construction" />
      </div>
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
          <ConsultationPopup onClose={togglePopup} />
        </div>
      )}
    </div>
  );
}

export default Hero;
