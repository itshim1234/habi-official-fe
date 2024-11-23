import React from "react";
import model from "../../assets/videos/Model.mp4";
import arrow from "../../assets/images/ArrowRight.png";
import "./style.css";
function Service({ toggleView }) {
  return (
    <div className="flex flex-col justify-center text-center bg-black text-white relative w-full h-fit">
      <hr className="bg-[#f8f8ff] p-0 m-0" />

      <button
        class="rotate-border flex items-center w-fit mt-[57px] md:mt-0 md:absolute md:top-[100px] md:left-0 backdrop-blur-[12.5px] bg-slate-50 bg-opacity-30 p-5 rounded-r-xl border-2 border-l-0 border-white"
        onClick={toggleView}
      >
        <span class="mr-3">BaaP</span>
        <img src={arrow} alt="" />
      </button>

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
        className="object-cover w-full h-[450px] md:h-[650px] lg:h-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={model} type="video/mp4" />
      </video>
      <hr className="bg-[#f8f8ff] p-0 m-0" />
    </div>
  );
}

export default Service;
