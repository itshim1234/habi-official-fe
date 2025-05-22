import React, { useEffect, useState } from "react";
import SparkleButton from "./SparkleButton"; // path to your SparkleButton
import homeButtonAnimation from "../assets/homeButtonAnimation.json"; // your home icon animation

const HomeButton = ({ className, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsVisible(true);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div
      className={className}
      style={{
        position: "fixed",
        bottom: "60px",
        right: isVisible ? "0px" : "-300px",
        transition: "right 1s ease",
        zIndex: 100,
      }}
    >
      <SparkleButton
        text="Back to | Home" // <- not empty, use a space to preserve layout
        isCalculator
        onClick={onClick}
        animationData={homeButtonAnimation} // <- inject custom Lottie (next step)
      />
    </div>
  );
};

export default HomeButton;
