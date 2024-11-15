import React, { useEffect, useState } from "react";

function Model() {
  const [rotation, setRotation] = useState({ alpha: 0, beta: 0, gamma: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the device is mobile or tablet
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(userAgent.includes("iphone") || userAgent.includes("android"));

    // Check if the device supports orientation events
    const handleOrientation = (event) => {
      const { alpha, beta, gamma } = event;
      setRotation({ alpha, beta, gamma });
    };

    // Handle mousemove event for larger screens
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const rotateX = (clientY / window.innerHeight) * 30 - 15; // Adjust rotation on Y-axis
      const rotateY = (clientX / window.innerWidth) * 30 - 15;  // Adjust rotation on X-axis
      setRotation({ alpha: 0, beta: rotateX, gamma: rotateY });
    };

    if (isMobile) {
      // For mobile devices, use device orientation
      if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation, false);
      }
    } else {
      // For larger screens, use mouse movement
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (isMobile && window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isMobile]);

  return (
    <div className="flex flex-col justify-center text-center bg-black text-white items-center w-screen">
      <hr className="bg-[#f8f8ff] p-0 m-0" />

      <p className="text-[48px] mt-8">
        Your dream home awaits. Ready to begin?
      </p>

      <iframe
        src="https://my.spline.design/dynamiciphonemockup-45622d0e18cc93aee1ba379284bb9d10/"
        loading="lazy"
        className="w-screen"
        style={{
          height: `calc(100vh - 150px)`,
          transform: `rotateY(${rotation.gamma}deg) rotateX(${rotation.beta}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      ></iframe>
    </div>
  );
}

export default Model;
