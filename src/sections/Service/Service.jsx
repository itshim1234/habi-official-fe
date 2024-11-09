import React from "react";
import model from "../../assets/videos/model.mov";

function Service() {
  return (
    <div className="flex flex-col justify-center text-center bg-black text-white">
      <hr className="bg-[#f8f8ff] p-0 m-0" />
      <h1 className="font-larken-bold text-[32px] md:text-[40px] lg:text-[48px]">
        habi homes
      </h1>
      <p className="text-[24px] md:text-[32px] lg:text-[40px] font-giloryB">
        One-Stop Design Centric
      </p>
      <p className="text-[18px] md:text-[24px] lg:text-[32px] font-giloryS">
        Construction Company
      </p>
      <p className="text-[16px] lg:text-[18px] font-giloryM w-[309px] md:w-[424px] mx-auto">
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
    </div>
  );
}

export default Service;
