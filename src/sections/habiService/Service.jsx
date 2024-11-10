import React from "react";
import model from "../../assets/videos/model.mov";
import arrow from "../../assets/images/ArrowRight.png";

function Service() {
  return (
    <div className="flex flex-col justify-center text-center bg-black text-white relative">
      <hr className="bg-[#f8f8ff] p-0 m-0" />

      <button className="flex w-fit mt-[57px] md:mt-0 md:absolute md:top-[100px] md:left backdrop-blur-[12.5px] bg-slate-50 bg-opacity-30 p-5 rounded-r-xl border border-gray-400 border-l-0">
        <span className="mr-3">BaaP</span> <img src={arrow} alt="" />
      </button>

      <h1 className="font-larken-bold text-[32px] md:text-[40px] lg:text-[48px] mt-[22px] md:mt-[56px]">
        habi homes
      </h1>
      <p className="text-[24px] md:text-[32px] lg:text-[40px] font-giloryB mt-[80px]">
        One-Stop Design Centric
      </p>
      <p className="text-[18px] md:text-[24px] lg:text-[32px] font-giloryS">
        Construction Company
      </p>
      <p className="text-[16px] lg:text-[18px] font-giloryM w-[309px] md:w-[424px] mx-auto mt-4">
        Tailored personalized living spaces that are custom-designed to meet the
        unique needs and preferences of each client. Every home reflects the
        client’s individual taste, lifestyle, and standard of living, creating a
        space that embodies their personal style and becomes an extension of
        their identity.
      </p>
      <video
        className="object-cover w-full h-[500px] md:h-[850px] lg:h-[950px] bg-[#111111]"
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
