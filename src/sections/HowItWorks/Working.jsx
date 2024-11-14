import React, { useEffect, useState, useRef } from "react";
import meetUs from "../../assets/images/meetUs.png";
import designWork from "../../assets/images/designWork.png";
import finalize from "../../assets/images/finalize.png";
import track from "../../assets/images/track.png";
import handover from "../../assets/images/handover.png";
import star from "../../assets/images/star.png";

import SplineCanvas from "./SplineCanvas";

// Fallback image
const defaultImage = meetUs;

const stages = [
  {
    title: "Meet us",
    description:
      "Begin your home construction journey by scheduling a meeting through our website or app, giving us a call, or reaching out on WhatsApp.",
    image: meetUs,
    number: 1,
  },
  {
    title: "Design",
    description:
      "After the meeting, our architects will create a home design tailored to your requirements. We ensure that every detail matches your preferences for a perfect outcome.",
    image: designWork,
    number: 2,
  },
  {
    title: "Finalize",
    description:
      "With your confirmation, we'll work on a budget to bring your vision to life. We'll ensure everything is prepared for the next step smoothly.",
    image: finalize,
    number: 3,
  },
  {
    title: "Track",
    description:
      "As construction begins, our mobile app keeps you updated. Track daily progress from anywhere, ensuring your dream home is coming together just as you envisioned.",
    image: track,
    number: 4,
  },
  {
    title: "Handover",
    description:
      "We guarantee your home will be delivered on time and within budget. It's our pride and joy to hand over the keys to your new home.",
    image: handover,
    number: 5,
  },
];

function Working({ scrollLocked, onScrollLockChange }) {
  const [currentStage, setCurrentStage] = useState(2);
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
      className="relative h-fit w-full text-white flex items-center justify-center"
    >
      <div
        className="absolute inset-0 z-10 -bottom-10"
        style={{
          background: `
            linear-gradient(to top, #000000, rgba(0, 0, 0, 0) 100px)
          `,
        }}
      />
      {/* Background iframe */}
      <div
        className="absolute inset-0 w-full h-[400px] md:h-[700px] top-16"
        style={{ zIndex: 0 }}
      >
        <SplineCanvas />
      </div>

      {/* Scrollable content container */}
      <div className="relative z-10 text-center h-full bg-transparent">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] md:text-3xl font-bold my-14 mb-16">
          How it Works?
        </h2>

        {/* Stage card */}
        <div className="relative bg-transparent backdrop-blur-md rounded-2xl border border-white/40 w-[300px] h-[240px] md:w-[714px] md:h-[487px] items-center justify-center mx-auto">
          <img
            src={stages[currentStage]?.image || defaultImage}
            alt={stages[currentStage]?.title || "Default Title"}
            className="w-full h-full object-contain"
          />
          <img
            src={star}
            alt=""
            className="absolute right-0 -bottom-5 md:-bottom-8 w-10 md:w-16"
          />
          <img
            src={star}
            alt=""
            className="absolute -right-2 md:-right-4 bottom-2 w-5 md:w-8"
          />
        </div>

        {/* Stage number */}
        <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold text-[#ffb969] mt-10 mb-4">
          {stages[currentStage]?.title || "Default Title"}
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[24px] w-[400px] lg:w-[500px] mx-auto">
          {stages[currentStage]?.description || "Default Description"}
        </p>
      </div>
      <div className="absolute left-[6%] lg:left-[18%] -bottom-24 text-[200px] text-stroke font-larken-bold z-0">
        {stages[currentStage]?.number || 0}
      </div>
    </div>
  );
}

export default Working;
