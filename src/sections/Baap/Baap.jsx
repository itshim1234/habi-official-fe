import React from "react";
import { useNavigate } from "react-router-dom";
import baap from "../../assets/videos/baap.mp4";
import "../habiService/style.css";
import SparkleButton from "../../components/SparkleButton";

function Baap({ toggleView }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center text-center bg-black text-white relative w-full h-fit">
      <hr className="bg-[#f8f8ff] p-0 m-0" />
      <div className="relative h-[115px] md:h-0">
        <div
          className="flex items-center w-fit mt-[57px] right-0 md:mt-0 absolute md:top-[100px] md:right-0"
          onClick={toggleView}
        >
          <SparkleButton text="Habi homes" />
        </div>
      </div>

      <h1 className="text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] text-white font-giloryB mt-[80px] md:mt-[56px]">
        BaaP
      </h1>
      <p className="text-[24px] md:text-[32px] lg:text-[40px] font-giloryB mt-[40px]">
        Building as a Product
      </p>
      <p className="text-[18px] md:text-[24px] lg:text-[32px] font-giloryS">
        Product Company
      </p>
      <p className="text-[16px] lg:text-[18px] 2xl:text-2xl font-giloryM w-[309px] md:w-[500px] 2xl:w-[700px] mx-auto mt-4 2xl:mt-6 mb-10">
        Turn your <h1 className="inline">dream house</h1> into a customizable
        product designed to meet your personal style and needs. With AI-powered
        design software and track construction progress through a mobile app.
        With real-time updates and milestones, you'll stay connected to each
        stage of the build. Using augmented and virtual reality, you can walk
        through a 3D model of your future home, experiencing its layout and feel
        before it's constructed. This seamless blend of technology and
        customization ensures your dream home perfectly matches your vision.
      </p>
      <div className="relative">
        <video
          className="object-cover w-full h-[450px] md:h-[650px] lg:h-full"
          autoPlay
          muted
          playsInline
        >
          <source src={baap} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 z-0"
          style={{
            background: `

            linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0) 30%)
          `,
          }}
        />
        <button
          className="absolute top-10 left-1/2 transform -translate-x-1/2 text-[18px] md:text-[24px]  py-3 pb-4 border border-[#7c7c7c] rounded-lg px-5 bg-black/20 font-giloryS"
          onClick={() => navigate("/baap")} // Corrected navigation
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Baap;
