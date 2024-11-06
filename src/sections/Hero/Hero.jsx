import React from "react";
import DarkBackground from "../../assets/desktopImages/DarkBackground.png";
import building from "../../assets/desktopImages/Building.png";
import river from "../../assets/videos/RiverflowVideo.mp4";
function Hero() {
  return (
    <div
      className="h-[515px] md:h-[1027px] w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${DarkBackground})`,
      }}
    >
      <div className="absolute bottom-0 object-cover h-[897px]">
        <video autoPlay loop muted playsInline>
          <source src={river} type="video/mp4" />
        </video>
      </div>
      <img src={building} alt="" className="absolute top-12 left-10" />
    </div>
  );
}

export default Hero;
