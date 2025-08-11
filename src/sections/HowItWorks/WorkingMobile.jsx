import React, { useEffect, useRef,useState } from "react";
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

// const WorkingMobile = () => {
//   const containerRef = useRef(null);
//   const stageRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       stages.forEach((_, index) => {
//         const stage = stageRefs.current[index];
//         if (stage) {
//           gsap.to(stage, {
//             scale: 0.7,
//             opacity: 0,
//             rotationX: 45,
//             scrollTrigger: {
//               trigger: stage,
//               start: "top 15%",
//               end: "bottom 5%",
//               scrub: 1,
//               invalidateOnRefresh: true,
//             },
//           });
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="relative min-h-screen w-full bg-black">
//       {/* Background Video */}
//       <video
//         className="fixed top-0 left-0 w-full h-full object-cover z-0"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src={loopVideo} type="video/mp4" />
//       </video>

//       {/* Overlay */}
//       {/* <div className="fixed inset-0 bg-black/60 z-10"></div> */}

//       {/* Content */}
//       <div className="relative  text-white z-10">
//         <div className="text-center py-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16">
//             How it Works?
//           </h2>
//         </div>

//         {/* Stages */}
//         <div className="flex flex-col  px-4 pb-16">
//           {stages.map((stage, index) => (
//             <div
//               key={index}
//               ref={(el) => (stageRefs.current[index] = el)}
//               className="stage sticky top-16 min-h-[60vh] flex items-center justify-center"
//             >
//               <div className="relative w-full max-w-md mx-auto">
//                 <div className="text-center ">
//                   {/* Image */}
//                   <div className="relative  flex flex-col gap-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden p-6 shadow-xl">
//                     <img
//                       src={stage.image}
//                       alt={stage.title}
//                       className="w-full h-48 object-contain rounded-lg"
//                     />
//                      <div className="flex">
//                           {/* Number */}
//                   <div className="text-[100px] font-bold bg-clip-text bg-gradient-to-r font-larken text-white/10 opacity-30">
//                     {stage.number}
//                   </div>
//                      <div className="flex flex-col">
//                          <h3 className="text-2xl font-bold text-[#ffb969] -mt-4">
//                     {stage.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-base text-gray-300 leading-relaxed">
//                     {stage.description}
//                   </p>
//                     </div>
//                       </div> 
                 

//                   </div>

//                   {/* Title */}
               
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkingMobile;



function WorkingMobile() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  // Automatically change stages when in viewport
  useEffect(() => {
    if (!isInViewport) return;

    const interval = setInterval(() => {
      setCurrentStage((prevStage) => (prevStage + 1) % stages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInViewport]);

  return (
    <div
      ref={sectionRef}
      className="relative h-fit lg:h-screen w-full text-white flex items-center justify-center bg-transparent"
    >
      <video
        className={`absolute top-0 left-0 w-full object-cover h-full`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={loopVideo} type="video/mp4" />
      </video>
      <div className="text-center h-full bg-transparent z-10">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-giloryB my-14 mb-16">
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

        {/* Stage number */}
        <h3 className="lg:absolute left-20  top-52 text-[24px] md:text-[32px] font-giloryS text-[#ffb969] mt-10 mb-4 ">
          {stages[currentStage]?.title || "Default Title"}
        </h3>
        <p className="lg:absolute h-20 lg:text-left  text-[16px] md:text-[18px] lg:text-[24px] font-giloryM  w-[400px] lg:w-[500px] mx-auto px-2">
          {stages[currentStage]?.description || "Default Description"}
        </p>
      </div>
      <div className="absolute left-[6%] lg:left-2 2xl:left-64 -bottom-24 2xl:bottom-20 text-[200px] text-stroke font-larken z-0">
        {stages[currentStage]?.number || 0}
      </div>
    </div>
  );
}

export default WorkingMobile;