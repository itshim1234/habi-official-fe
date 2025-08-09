
import React, { useEffect,useState,useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import meetUs from "../../assets/images/meetUs.webp";
import designWork from "../../assets/images/designWork.webp";
import finalize from "../../assets/images/finalize.webp";
import track from "../../assets/images/track1.webp";
import handover from "../../assets/images/handover.webp";
import loopVideo from "../../assets/videos/loopVideo.mp4";
import star from "../../assets/images/star.webp"


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

function WorkingLaptop() {

useEffect(() => {
  gsap.utils.toArray(".stage").forEach((stage) => {
    gsap.fromTo(stage,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: 0.8,
        scrollTrigger: {
          trigger: stage,
          start: "center center",
          end: "+=500",   // fade distance
          scrub: true,
          pin: true,      // holds it in place
          pinSpacing: false,
        }
      }
    );
  });
}, []);


   

      
     


  return (
    <div className="relative  min-h-screen w-full text-white flex items-center justify-center bg-transparent">
      <video
        className={`absolute top-0 left-0 w-full object-cover h-full z-1`}
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
         
        >
          How it Works?
        </h2>

        {/* Stage card */}
        
        {stages.map((stage, index) => (
          < div key={index} className=" stage flex flex-col">
        <div className="  relative  bg-transparent backdrop-blur-md rounded-2xl border border-white/40 w-[300px] h-[240px] md:w-[714px] md:h-[487px] lg:w-[40vw] lg:h-[60vh] items-center justify-center mx-auto">
          <img
    src={stage.image}
              alt={stage.title}
            className="w-full h-full object-contain"
          />
          <img
            
            src={star}
            alt="Home construction Bengaluru"
            className="absolute right-0 -bottom-5 md:-bottom-8 w-10 md:w-16"
          />
          <img
            src={star}
            alt="Home construction Bengaluru"
            className="absolute -right-2 md:-right-4 bottom-2 w-5 md:w-8"
          />
        </div>

             <div className="flex ">
               <span className="text-[400px] font-larken text-white/10">
              {stage.number}
            </span>
          <div className="flex flex-col gap-8 ">
            <h3 className="text-3xl font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[#ffb969]">{stage.title}</h3>
              
            <p className="text-[16px]  md:text-[18px] lg:text-[24px] max-w-xl">{stage.description}</p>
            </div>
            </div>
            </div>

        ))}

        
      
    </div>
    </div>
  );
}

export default WorkingLaptop;
