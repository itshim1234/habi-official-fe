import React from "react";
import herobackground from "../../assets/videos/heroBackground2.mp4";
import "./hero.css";

function Hero() {
  return (
    <div className="relative min-h-[300px] h-[515px] md:h-[1024px] w-full bg-cover bg-center bg-no-repeat ">
      {/* Video background */}
      <div className="absolute inset-0 z-0 bg-cover">
        <video
          className="object-cover w-full h-[514px] md:h-[1024px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={herobackground} type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(to right, rgba(17, 17, 17, 1), rgba(0, 0, 0, 0) 20%),
            linear-gradient(to left, rgba(17, 17, 17, 1), rgba(0, 0, 0, 0) 20%),
            linear-gradient(to top, rgba(17, 17, 17, 1), rgba(0, 0, 0, 0) 40%)
          `,
        }}
      />

      {/* Overlay content */}
      <div className="relative z-20 text-white justify-center text-center top-[52%]">
        {/* Background shadow layer */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity for shadow intensity
            filter: "blur(16px)", // Blur effect for a softer shadow
            borderRadius: "50px", // Optional, adjust for rounded corners if needed
          }}
        ></div>

        {/* Main text */}
        <div className="relative text-[48px] md:text-[96px] lg:text-[114px] font-larken-bold leading-[50px] md:leading-[100px] lg:leading-[120px]">
          {/* Blurred background above the text */}
          <div
            className="absolute -top-3 left-0 right-0 mx-auto z-40"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
              filter: "blur(50px)", // Blur effect for shadow
              width: "100%",
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
      <div className="absolute z-20 text-white justify-center text-center right-[36px] md:right-[32px] lg:right-[82px] top-[20px] md:top-[40px]">
        <button className="flex items-center justify-between px-4 py-2 w-32 h-12 rounded-lg border-2 border-white/20 bg-transparent backdrop-blur-md text-white font-semibold">
          <span>Login</span>
          <span className="text-2xl">|</span>
          <span className="text-2xl">&times;</span>
        </button>
      </div>
      <div className="relative z-20 text-white justify-center text-center top-[57%] flex space-x-4 md:space-x-12 text-md md:text-[24px]">
        <button className="px-5 py-2 w-[167] md:w-[275px] h-12 md:h-[75px] rounded-xl border-2 border-white/20 bg-black/30 backdrop-blur text-white flex items-center justify-center">
          Explore Projects
        </button>

        <button className="px-5 py-2 w-[167] md:w-[275px] h-12 md:h-[75px] rounded-xl bg-primary text-white flex items-center justify-center">
          Free Consultation
        </button>
      </div>
    </div>
  );
}

export default Hero;
