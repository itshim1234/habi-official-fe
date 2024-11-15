import React, { useEffect, useState, useRef } from "react";
import meetUs from "../../assets/images/meetUs.png";
import designWork from "../../assets/images/designWork.png";
import finalize from "../../assets/images/finalize.png";
import track from "../../assets/images/track.png";
import handover from "../../assets/images/handover.png";
import star from "../../assets/images/star.png";
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
  const [scrollLocked, setScrollLocked] = useState(false);
  const sectionRef = useRef(null);
  const nextSectionRef = useRef(null); // Ref for the next section

  // Intersection observer for the current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setScrollLocked(true); // Lock scrolling when the section is in view
        } else {
          setScrollLocked(false); // Unlock scrolling when the section is out of view
        }
      },
      { threshold: 0.8 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  // Prevent page scrolling when `scrollLocked` is true
  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [scrollLocked]);

  // Handle stage advancement and scrolling
  useEffect(() => {
    const handleScroll = (e) => {
      if (!scrollLocked) return;

      if (e.deltaY > 0 && currentStage < stages.length - 1) {
        setCurrentStage((prev) => prev + 1);
      } else if (e.deltaY < 0 && currentStage > 0) {
        setCurrentStage((prev) => prev - 1);
      }

      // Unlock scrolling when the last stage is reached and scroll to the next section
      if (currentStage === stages.length - 1) {
        setScrollLocked(false);
        document.body.style.overflow = ""; // Re-enable scrolling
        nextSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentStage, scrollLocked]);

  return (
    <div className="relative h-fit w-full text-white flex items-center justify-center z-20">
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
        {/* <SplineCanvas /> */}
      </div>

      {/* Scrollable content container */}
      <div className="relative z-10 text-center h-full bg-transparent">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold my-14 mb-16">
          How it Works?
        </h2>

        {/* Stage card */}
        <div className="relative bg-transparent backdrop-blur-md rounded-2xl border border-white/40 w-[300px] h-[240px] md:w-[714px] md:h-[487px] items-center justify-center mx-auto">
          <img
            src={stages[currentStage]?.image}
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
        <p
          className="text-[16px] md:text-[18px] lg:text-[24px] w-[400px] lg:w-[500px] mx-auto"
          ref={sectionRef}
        >
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
