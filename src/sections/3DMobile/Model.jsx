import React, { useEffect, useState } from "react";

function Model() {
  const [rotation, setRotation] = useState({ alpha: 0, beta: 0, gamma: 0 });

  useEffect(() => {
    const handleOrientation = (event) => {
      // Capture rotation values from the device orientation
      const { alpha, beta, gamma } = event;

      // Update rotation state
      setRotation({ alpha, beta, gamma });
    };

    // Check if the device supports orientation events
    if (window.DeviceOrientationEvent) {
      // Attach the event listener
      window.addEventListener("deviceorientation", handleOrientation, false);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener("deviceorientation", handleOrientation);
      };
    }
  }, []);

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
