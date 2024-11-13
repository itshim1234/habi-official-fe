import React, { useEffect, useState, useRef } from "react";
import meetUs from "../../assets/images/meetUs.png";
import designWork from "../../assets/images/designWork.png";
import finalize from "../../assets/images/finalize.png";
import track from "../../assets/images/track.png";
import handover from "../../assets/images/handover.png";
import SplineCanvas from "./SplineCanvas";

// Fallback image
const defaultImage = meetUs;

const stages = [
  {
    title: "Meet us",
    description: "Begin your journey...",
    image: meetUs,
    number: 1,
  },
  {
    title: "Design",
    description: "Our architects will create...",
    image: designWork,
    number: 2,
  },
  {
    title: "Finalize",
    description: "We'll work on a budget...",
    image: finalize,
    number: 3,
  },
  {
    title: "Track",
    description: "Track daily progress...",
    image: track,
    number: 4,
  },
  {
    title: "Handover",
    description: "Delivered on time...",
    image: handover,
    number: 5,
  },
];

function Working({ scrollLocked, onScrollLockChange }) {
  const [currentStage, setCurrentStage] = useState(0);
  const sectionRef = useRef(null);

  // Use intersection observer to detect when Working section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onScrollLockChange(true);
        } else {
          onScrollLockChange(false);
        }
      },
      { threshold: 1.0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      onScrollLockChange(false); // Ensure scrolling is unlocked on cleanup
    };
  }, [onScrollLockChange]);

  // Handle stage advancement on each scroll within the locked section
  useEffect(() => {
    const handleStageChange = () => {
      if (scrollLocked) {
        if (currentStage < stages.length - 1) {
          setCurrentStage((prevStage) => prevStage + 1);
        } else {
          onScrollLockChange(false); // Unlock scroll after last stage
        }
      }
    };

    window.addEventListener("scroll", handleStageChange);

    return () => {
      window.removeEventListener("scroll", handleStageChange);
    };
  }, [currentStage, scrollLocked, onScrollLockChange]);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-full text-white flex items-center justify-center overflow-auto"
    >
      {/* Background iframe */}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        style={{ zIndex: -1 }}
      ></div>

      {/* Scrollable content container */}
      <div className="relative z-10 text-center max-w-lg px-6 py-12 overflow-y-auto h-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">How it Works?</h2>

        {/* Stage card */}
        <div className="p-8 bg-gray-900 bg-opacity-75 rounded-xl shadow-lg">
          <img
            src={stages[currentStage]?.image || defaultImage}
            alt={stages[currentStage]?.title || "Default Title"}
            className="w-full h-48 md:h-64 object-cover rounded-md mb-6"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-yellow-500 mb-4">
            {stages[currentStage]?.title || "Default Title"}
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            {stages[currentStage]?.description || "Default Description"}
          </p>
        </div>

        {/* Stage number */}
        <div className="text-yellow-500 text-4xl md:text-5xl font-bold mt-6">
          {stages[currentStage]?.number || 0}
        </div>
      </div>
    </div>
  );
}

export default Working;
