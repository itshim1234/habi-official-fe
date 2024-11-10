import React, { useEffect, useState, useRef } from "react";
import meetUs from "../../assets/images/meetUs.png";
import designWork from "../../assets/images/designWork.png";
import finalize from "../../assets/images/finalize.png";
import track from "../../assets/images/track.png";
import handover from "../../assets/images/handover.png";

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

function Working() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isAtLastStage, setIsAtLastStage] = useState(false);
  const myDivRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to check if `myDiv` is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (myDivRef.current) {
      observer.observe(myDivRef.current);
    }

    return () => {
      if (myDivRef.current) {
        observer.unobserve(myDivRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isInView && scrollContainerRef.current) {
        const scrollPosition = scrollContainerRef.current.scrollTop;
        const scrollHeight = scrollContainerRef.current.scrollHeight;
        const containerHeight = scrollContainerRef.current.clientHeight;
        const progress = scrollPosition / (scrollHeight - containerHeight);

        // Ensure the current stage is within the valid range
        const safeCurrentStage = Math.min(
          Math.max(Math.floor(progress * stages.length), 0),
          stages.length - 1
        );
        setCurrentStage(safeCurrentStage);

        // Check if the last stage is reached
        if (safeCurrentStage === stages.length - 1) {
          setIsAtLastStage(true);
        } else {
          setIsAtLastStage(false);
        }
      }
    };

    // Use requestAnimationFrame for smooth scroll handling
    const onScroll = () => requestAnimationFrame(handleScroll);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", onScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", onScroll);
      }
    };
  }, [isInView]);

  useEffect(() => {
    // Lock or unlock scrolling based on whether the "Working" section is in view
    if (isInView) {
      scrollContainerRef.current.style.overflow = "hidden"; // Disable scroll for the container
    } else {
      scrollContainerRef.current.style.overflow = "auto"; // Re-enable scroll for the container
    }

    // Enable scroll when the last stage (Handover) is reached
    if (isAtLastStage) {
      scrollContainerRef.current.style.overflow = "auto"; // Allow scroll for the next section
    }

    // Cleanup on component unmount
    return () => {
      scrollContainerRef.current.style.overflow = "auto"; // Ensure scroll is always re-enabled
    };
  }, [isInView, isAtLastStage]);

  // Ensure safe access to stages array with fallback values
  const safeCurrentStage = Math.min(
    Math.max(currentStage, 0),
    stages.length - 1
  );

  return (
    <div
      ref={scrollContainerRef}
      className="myDiv relative h-screen w-full text-white flex items-center justify-center overflow-auto"
    >
      {/* Background iframe */}
      <iframe
        src="https://my.spline.design/gitnesssplinetest-73744034a060a8a69a38b8355df2a261/"
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -2 }}
      ></iframe>

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        style={{ zIndex: -1 }}
      ></div>

      {/* Scrollable content container */}
      <div className="relative z-10 text-center max-w-lg px-6 py-12 overflow-y-auto h-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">How it Works?</h2>

        {/* Stage card with dynamic image */}
        <div className="p-8 bg-gray-900 bg-opacity-75 rounded-xl shadow-lg">
          <img
            src={stages[safeCurrentStage]?.image || defaultImage} // Safe check for image
            alt={stages[safeCurrentStage]?.title || "Default Title"}
            className="w-full h-48 md:h-64 object-cover rounded-md mb-6"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-yellow-500 mb-4">
            {stages[safeCurrentStage]?.title || "Default Title"}
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            {stages[safeCurrentStage]?.description || "Default Description"}
          </p>
        </div>

        {/* Stage number */}
        <div
          ref={myDivRef}
          className="text-yellow-500 text-4xl md:text-5xl font-bold mt-6"
        >
          {stages[safeCurrentStage]?.number || 0} {/* Default number */}
        </div>
      </div>
    </div>
  );
}

export default Working;
