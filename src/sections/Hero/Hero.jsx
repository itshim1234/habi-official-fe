import React from "react";
import DarkBackground from "../../assets/desktopImages/DarkBackground.png";
import building from "../../assets/desktopImages/Building.png";
import river from "../../assets/videos/RiverflowVideo.mp4";
import habiHomes from "../../assets/videos/habiHomes.mov";
function Hero() {
  return (
    <div
      className="min-h-[300px] h-[515px] md:h-[1027px] w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${DarkBackground})`,
      }}
    >
      <div className="absolute bottom-0 object-cover md:h-[897px] w-full">
        <video autoPlay loop muted playsInline>
          <source src={habiHomes} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Hero;
