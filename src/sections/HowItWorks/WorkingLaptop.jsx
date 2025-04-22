import React, { useEffect, useState, useRef } from "react";
import meetUs from "../../assets/images/meetUs.webp";
import designWork from "../../assets/images/designWork.webp";
import finalize from "../../assets/images/finalize.webp";
import track from "../../assets/images/track1.webp";
import handover from "../../assets/images/handover.webp";
import star from "../../assets/images/star.webp";
import loopVideo from "../../assets/videos/loopVideo.mp4";

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

function WorkingLaptop() {
  const [currentStage, setCurrentStage] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canScroll, setCanScroll] = useState(true);

  const sectionRef = useRef(null);
  const topRef = useRef(null);
  const nextSectionRef = useRef(null);

  const scrollCountRef = useRef(0);
  const touchStartYRef = useRef(0);

  const currentStageRef = useRef(currentStage);

  useEffect(() => {
    currentStageRef.current = currentStage;
  }, [currentStage]);

  // Lock scroll when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !scrolled) {
          setScrollLocked(true);
        }
      },
      { threshold: 1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [scrolled]);

  // Reverse scroll lock logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && scrolled) {
          setScrollLocked(true);
        }
      },
      { threshold: 1 }
    );
    if (topRef.current) observer.observe(topRef.current);
    return () => observer.disconnect();
  }, [scrolled]);

  // Prevent scrolling
  useEffect(() => {
    const preventScroll = (e) => e.preventDefault();
    document.body.style.overflowY = scrollLocked ? "hidden" : "";
    if (scrollLocked) {
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.removeEventListener("touchmove", preventScroll);
    }
    return () => document.removeEventListener("touchmove", preventScroll);
  }, [scrollLocked]);

  // Main scroll/touch logic
  useEffect(() => {
    const touchThreshold = 600;

    const handleWheel = (e) => {
      if (!scrollLocked || !canScroll) return;
      scrollCountRef.current += Math.sign(e.deltaY);
      handleScrollLogic(scrollCountRef.current);
    };

    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!scrollLocked || !canScroll) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - touchEndY;
      touchStartYRef.current = touchEndY;

      scrollCountRef.current += deltaY;

      if (scrollCountRef.current >= touchThreshold) {
        handleScrollLogic(4);
        scrollCountRef.current = 0;
      } else if (scrollCountRef.current <= -touchThreshold) {
        handleScrollLogic(-4);
        scrollCountRef.current = 0;
      }
    };

    const handleScrollLogic = (scroll) => {
      if (!canScroll) return;

      const stage = currentStageRef.current;

      if (scroll >= 4 && stage < stages.length - 1) {
        scrollCountRef.current = 0;
        setCurrentStage(stage + 1);
        setCanScroll(false);
        setTimeout(() => setCanScroll(true), 700);
      } else if (scroll <= -4 && stage > 0) {
        scrollCountRef.current = 0;
        setCurrentStage(stage - 1);
        setCanScroll(false);
        setTimeout(() => setCanScroll(true), 700);
      }

      if (stage === stages.length - 1 && scroll >= 4) {
        scrollCountRef.current = 0;
        setScrollLocked(false);
        setScrolled(true);
        document.body.style.overflow = "";
        nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }

      if (stage === 0 && scroll <= -4) {
        scrollCountRef.current = 0;
        setScrollLocked(false);
        setScrolled(false);
        document.body.style.overflow = "";
        topRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentStage, scrollLocked, canScroll]);

  return (
    <div className="relative h-fit lg:h-screen w-full text-white flex items-center justify-center bg-transparent">
      <video
        className="absolute top-0 left-0 w-full object-cover h-full"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={loopVideo} type="video/mp4" />
      </video>

      <div className="text-center h-full bg-transparent z-10">
        <h2
          className="text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] font-giloryB my-14 mb-16"
          ref={topRef}
        >
          How it Works?
        </h2>

        <div
          className="relative lg:absolute lg:right-20 2xl:right-64 bg-transparent backdrop-blur-md rounded-2xl border border-white/40 w-[300px] h-[240px] md:w-[714px] md:h-[487px] lg:w-[40vw] lg:h-[60vh] items-center justify-center mx-auto"
          ref={sectionRef}
        >
          <img
            src={stages[currentStage]?.image}
            alt={stages[currentStage]?.title || "Stage"}
            className="w-full h-full object-contain"
          />
          <img
            src={star}
            alt="star"
            className="absolute right-0 -bottom-5 md:-bottom-8 w-10 md:w-16"
          />
          <img
            src={star}
            alt="star"
            className="absolute -right-2 md:-right-4 bottom-2 w-5 md:w-8"
          />
        </div>

        <h3 className="lg:absolute left-20 2xl:left-64 top-52 text-[24px] md:text-[32px] lg:text-[40px] 2xl:top-64 font-giloryS text-[#ffb969] mt-10 mb-4 ">
          {stages[currentStage]?.title || "Default Title"}
        </h3>
        <p className="lg:absolute lg:text-left lg:left-20 2xl:left-64 lg:top-80 2xl:top-96 text-[16px] md:text-[18px] lg:text-[24px] font-giloryM  w-[400px] lg:w-[500px] mx-auto">
          {stages[currentStage]?.description || "Default Description"}
        </p>
      </div>

      <div className="absolute left-[6%] lg:left-2 2xl:left-64 -bottom-24 2xl:bottom-20 text-[200px] text-stroke font-larken z-0">
        {stages[currentStage]?.number || 0}
      </div>

      <div ref={nextSectionRef} />
    </div>
  );
}

export default WorkingLaptop;

