import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import meetUs from "../../assets/images/meetUs.webp";
import designWork from "../../assets/images/designWork.webp";
import finalize from "../../assets/images/finalize.webp";
import track from "../../assets/images/track1.webp";
import handover from "../../assets/images/handover.webp";
import loopVideo from "../../assets/videos/loopVideo.mp4";
import star from "../../assets/images/star.webp";

gsap.registerPlugin(ScrollTrigger);

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

const WorkingMobile = () => {
  const containerRef = useRef(null);
  const stageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stages.forEach((_, index) => {
        const stage = stageRefs.current[index];
        if (stage) {
          gsap.to(stage, {
            scale: 0.7,
            opacity: 0,
            rotationX: 45,
            scrollTrigger: {
              trigger: stage,
              start: "top 15%",
              end: "bottom 15%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-black">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={loopVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white">
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            How it Works?
          </h2>
        </div>

        {/* Stages */}
        <div className="flex flex-col gap-6 px-4 pb-16">
          {stages.map((stage, index) => (
            <div
              key={index}
              ref={(el) => (stageRefs.current[index] = el)}
              className="stage-card sticky top-16 min-h-screen flex items-center justify-center"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="text-center space-y-6">
                  {/* Image */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden p-6 shadow-xl">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-48 object-contain rounded-lg"
                    />
                    {/* Decorative Stars */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-2 -right-0.5 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-300"></div>
                  </div>

                  {/* Number */}
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 opacity-30">
                    {stage.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-orange-400 -mt-4">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingMobile;
