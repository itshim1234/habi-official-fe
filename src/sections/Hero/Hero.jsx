import React from "react";
import herobackground from "../../assets/videos/heroBackground.mp4";
import abc from "../../assets/videos/habiHomes.mov";

function Hero() {
  return (
    <div className="relative min-h-[300px] h-[515px] md:h-[1027px] w-full bg-cover bg-center bg-no-repeat">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-[514px] md:h-[1026px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={abc} type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(to right, rgba(17, 17, 17, 1), rgba(0, 0, 0, 0) 50%),
            linear-gradient(to left, rgba(17, 17, 17, 1), rgba(0, 0, 0, 0) 50%),
            linear-gradient(to top, rgba(17, 17, 17, 1), rgba(0, 0, 0, 0) 20%)



          `,
        }}
      />

      {/* Overlay content */}
      {/* <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-[48px] md:text-[96px] lg:text-[114px] font-larken-bold">
          Redefining the
        </h1>
        <h1 className="text-[48px] md:text-[96px] lg:text-[114px] font-larken-bold">
          way of living{" "}
        </h1>
      </div> */}
    </div>
  );
}

export default Hero;
