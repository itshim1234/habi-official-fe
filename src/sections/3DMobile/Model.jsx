import React, { useState } from "react";
import ConsultationPopup from "../Hero/ConsultationPopup";

function Model() {
  const [isPopupVisible1, setIsPopupVisible] = useState(false);

  // Toggle popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible1);
  };
  return (
    <div className="relative flex flex-col justify-center text-center bg-black text-white items-center w-screen">
      <hr className="bg-[#f8f8ff] p-0 m-0" />

      <p className="text-[32px] md:text-[40px] lg:text-[48px] mt-8 font-giloryB">
        Your dream home awaits. Ready to begin?
      </p>
      <iframe
        src="https://my.spline.design/dynamiciphonemockup-45622d0e18cc93aee1ba379284bb9d10/"
        loading="lazy"
        className="w-screen"
        style={{ height: `calc(100vh - 150px)` }}
      ></iframe>

      <button
        className="absolute left-1/2 transform -translate-x-1/2 top-3/4 bg-secondary px-6 py-3 text-black font-giloryS rounded-lg"
        onClick={togglePopup} // Show the popup on click
      >
        Let's Discuss
      </button>
      {isPopupVisible1 && (
        <div className="absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 z-50">
          <ConsultationPopup onClose={togglePopup} />
        </div>
      )}
    </div>
  );
}

export default Model;
