import React, { useEffect, useState, useRef } from "react";
import meetUs from "../../assets/images/meetUs.png";
import designWork from "../../assets/images/designWork.png";
import finalize from "../../assets/images/finalize.png";
import track from "../../assets/images/track.png";
import handover from "../../assets/images/handover.png";
import star from "../../assets/images/star.png";
// import SplineCanvas from "./SplineCanvas";

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
  const [scrolled, setScrolled] = useState(false);

  const sectionRef = useRef(null);
  const topRef = useRef(null);
  const nextSectionRef = useRef(null);

  // Intersection observer for the main section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!scrolled) {
            setScrollLocked(true); // Lock scrolling when the section is in view
          } // Reset to ensure proper logic for downward scrolling
        } else {
          setScrollLocked(false); // Unlock scrolling when the section is out of view
        }
      },
      { threshold: 1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, [scrolled]);

  // Intersection observer for the top element (reverse scroll)
  useEffect(() => {
    const topObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (scrolled) {
            setScrollLocked(true); // Lock scroll when at the top and reverse scrolling
          } else {
            setScrollLocked(false); // Unlock scrolling when the section is out of view
          }
        }
      },
      { threshold: 1 }
    );

    if (topRef.current) {
      topObserver.observe(topRef.current);
    }

    return () => {
      if (topRef.current) topObserver.disconnect();
    };
  }, [scrolled]);

  // Prevent page scrolling when `scrollLocked` is true
  useEffect(() => {
    const preventScroll = (e) => e.preventDefault();

    document.body.style.overflowY = scrollLocked ? "hidden" : "";

    if (scrollLocked) {
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.removeEventListener("touchmove", preventScroll);
    }

    return () => {
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [scrollLocked]);

  // Scroll event handler
  useEffect(() => {
    let scrollCount = 0;
    let touchStartY = 0;

    const handleWheel = (e) => {
      if (!scrollLocked) return;

      scrollCount += Math.sign(e.deltaY);

      handleScrollLogic(scrollCount);
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!scrollLocked) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      scrollCount += Math.sign(deltaY);
      handleScrollLogic(scrollCount);
    };

    const handleScrollLogic = (scroll) => {
      // Forward scroll (downward)
      if (scroll >= 4 && currentStage < stages.length - 1) {
        setCurrentStage((prev) => prev + 1);
        scrollCount = 0;
      }

      // Reverse scroll (upward)
      if (scroll <= -4 && currentStage > 0) {
        setCurrentStage((prev) => prev - 1);
        scrollCount = 0;
      }

      // Unlock scrolling at the last stage
      if (currentStage === stages.length - 1 && scroll >= 4) {
        setScrollLocked(false);
        setScrolled(true);
        document.body.style.overflow = ""; // Allow scrolling
        nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }

      // Unlock scrolling at the first stage (reverse scroll)
      if (currentStage === 0 && scroll <= -4) {
        setScrollLocked(false);
        setScrolled(false);
        document.body.style.overflow = ""; // Allow scrolling
        topRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Add event listeners for wheel and touch
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    // Cleanup listeners
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentStage, scrollLocked]);

  return (
    <div className="relative h-fit lg:h-screen w-full text-white flex items-center justify-center">
      {/* Scrollable content container */}
      <div className="text-center h-full bg-transparent">
        <h2
          className="text-[32px] md:text-[40px] lg:text-[48px] font-giloryB my-14 mb-16"
          ref={topRef}
        >
          How it Works?
        </h2>

        {/* Stage card */}
        <div className="relative lg:absolute lg:right-20 2xl:right-64 bg-transparent backdrop-blur-md rounded-2xl border border-white/40 w-[300px] h-[240px] md:w-[714px] md:h-[487px] lg:w-[40vw] lg:h-[60vh] items-center justify-center mx-auto">
          <img
            src={stages[currentStage]?.image}
            alt={stages[currentStage]?.title || "Default Title"}
            className="w-full h-full object-contain"
          />
          <img
            ref={sectionRef} // Attach topRef to the element to trigger reverse scrolling
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
        <h3 className="lg:absolute left-20 2xl:left-64 top-52 text-[24px] md:text-[32px] lg:text-[40px] 2xl:top-64 font-giloryS text-[#ffb969] mt-10 mb-4">
          {stages[currentStage]?.title || "Default Title"}
        </h3>
        <p className="lg:absolute lg:text-left lg:left-20 2xl:left-64 lg:top-80 2xl:top-96 text-[16px] md:text-[18px] lg:text-[24px] font-giloryM  w-[400px] lg:w-[500px] mx-auto">
          {stages[currentStage]?.description || "Default Description"}
        </p>
      </div>
      <div className="absolute left-[6%] lg:left-2 2xl:left-64 -bottom-24 2xl:bottom-20 text-[200px] text-stroke font-larken z-0">
        {stages[currentStage]?.number || 0}
      </div>
    </div>
  );
}

export default Working;
