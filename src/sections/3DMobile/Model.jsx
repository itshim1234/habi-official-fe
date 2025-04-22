import React from "react";
import whatsapp from "../../assets/images/whatsapp.webp";

function Model({ togglePopup }) {
  return (
    <div className="relative flex flex-col justify-center text-center bg-black text-white items-center w-screen h-screen">
      <hr className="bg-[#f8f8ff] p-0 m-0" />

      <p className="text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] mt-8 font-giloryB">
        Your dream home awaits. Ready to begin?
      </p>
      <iframe
        src="https://my.spline.design/dynamiciphonemockup-45622d0e18cc93aee1ba379284bb9d10/"
        className="w-screen h-screen"
      ></iframe>

      <button
        className="absolute left-1/2 transform -translate-x-1/2 top-3/4 bg-secondary px-6 py-3 text-black font-giloryS rounded-lg"
        onClick={togglePopup} // Use parent function
      >
        Let's Discuss
      </button>

      <div
        className="absolute w-40 h-9 bottom-5 right-0 md:right-8 pr-10 bg-[#191919] rounded-lg flex font-giloryM justify-center items-center text-3xl cursor-pointer"
        onClick={() => window.open("https://wa.me/9606210818", "_blank")}
      >
        <img src={whatsapp} alt="WhatsApp" className="w-8 md:w-10 mr-3" />
        <p>9606210818</p>
      </div>
    </div>
  );
}

export default Model;

