
// import React, { useEffect,useState,useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import meetUs from "../../assets/images/meetUs.webp";
// import designWork from "../../assets/images/designWork.webp";
// import finalize from "../../assets/images/finalize.webp";
// import track from "../../assets/images/track1.webp";
// import handover from "../../assets/images/handover.webp";
// import loopVideo from "../../assets/videos/loopVideo.mp4";
// import star from "../../assets/images/star.webp"


// gsap.registerPlugin(ScrollTrigger);

// const stages = [
//   {
//     title: "Meet us",
//     description:
//       "Begin your home construction journey by scheduling a meeting through our website or app, giving us a call, or reaching out on WhatsApp.",
//     image: meetUs,
//     number: 1,
//   },
//   {
//     title: "Design",
//     description:
//       "After the meeting, our architects will create a home design tailored to your requirements. We ensure that every detail matches your preferences for a perfect outcome.",
//     image: designWork,
//     number: 2,
//   },
//   {
//     title: "Finalize",
//     description:
//       "With your confirmation, we'll work on a budget to bring your vision to life. We'll ensure everything is prepared for the next step smoothly.",
//     image: finalize,
//     number: 3,
//   },
//   {
//     title: "Track",
//     description:
//       "As construction begins, our mobile app keeps you updated. Track daily progress from anywhere, ensuring your dream home is coming together just as you envisioned.",
//     image: track,
//     number: 4,
//   },
//   {
//     title: "Handover",
//     description:
//       "We guarantee your home will be delivered on time and within budget. It's our pride and joy to hand over the keys to your new home.",
//     image: handover,
//     number: 5,
//   },
// ];
// function WorkingLaptop() {
//   const [currentStage, setCurrentStage] = useState(0);
//   const [scrollLocked, setScrollLocked] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const sectionRef = useRef(null);
//   const topRef = useRef(null);
//   const nextSectionRef = useRef(null);

//   // Intersection observer for the main section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           if (!scrolled) {
//             setScrollLocked(true); // Lock scrolling when the section is in view
//           } // Reset to ensure proper logic for downward scrolling
//         }
//       },
//       { threshold: 1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) observer.disconnect();
//     };
//   }, [scrolled]);
//   // Intersection observer for the top element (reverse scroll)
//   useEffect(() => {
//     const topObserver = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           if (scrolled) {
//             setScrollLocked(true); // Lock scroll when at the top and reverse scrolling
//           }
//         }
//       },
//       { threshold: 1 }
//     );
//     if (topRef.current) {
//       topObserver.observe(topRef.current);
//     }
//     return () => {
//       if (topRef.current) topObserver.disconnect();
//     };
//   }, [scrolled]);
//   // Prevent page scrolling when `scrollLocked` is true
//   useEffect(() => {
//     const preventScroll = (e) => e.preventDefault();
//     document.body.style.overflowY = scrollLocked ? "hidden" : "";
//     if (scrollLocked) {
//       document.addEventListener("touchmove", preventScroll, { passive: false });
//     } else {
//       document.removeEventListener("touchmove", preventScroll);
//     }
//     return () => {
//       document.removeEventListener("touchmove", preventScroll);
//     };
//   }, [scrollLocked]);

//   // Scroll event handler
//   useEffect(() => {
//     let scrollCount = 0;
//     let touchStartY = 0;
//     const handleWheel = (e) => {
//       if (!scrollLocked) return;
//       scrollCount += Math.sign(e.deltaY);
//       handleScrollLogic(scrollCount);
//     };
//     const handleTouchStart = (e) => {
//       touchStartY = e.touches[0].clientY;
//     };

//     const handleTouchMove = (e) => {
//       if (!scrollLocked) return;

//       const touchEndY = e.touches[0].clientY;
//       const deltaY = touchStartY - touchEndY; // Calculate the vertical movement
//       touchStartY = touchEndY; // Update the starting point for the next move

//       scrollCount += deltaY; // Accumulate the total scroll amount

//       const touchThreshold = 600; // Threshold for triggering stage changes (higher = slower transitions)

//       if (scrollCount >= touchThreshold) {
//         handleScrollLogic(4); // Pass "1" for forward scroll
//         scrollCount = 0; // Reset scroll count after triggering
//       } else if (scrollCount <= -touchThreshold) {
//         handleScrollLogic(-4); // Pass "-1" for reverse scroll
//         scrollCount = 0; // Reset scroll count after triggering
//       }
//     };

//     const handleScrollLogic = (scroll) => {
//       // Forward scroll (downward)
//       if (scroll >= 4 && currentStage < stages.length - 1) {
//         setCurrentStage((prev) => prev + 1);
//         scrollCount = 0;
//       }
//       // Reverse scroll (upward)
//       if (scroll <= -4 && currentStage > 0) {
//         setCurrentStage((prev) => prev - 1);
//         scrollCount = 0;
//       }
//       // Unlock scrolling at the last stage
//       if (currentStage === stages.length - 1 && scroll >= 4) {
//         setScrollLocked(false);
//         setScrolled(true);
//         document.body.style.overflow = ""; // Allow scrolling
//         nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
//       }
//       // Unlock scrolling at the first stage (reverse scroll)
//       if (currentStage === 0 && scroll <= -4) {
//         setScrollLocked(false);
//         setScrolled(false);
//         document.body.style.overflow = ""; // Allow scrolling
//         topRef.current?.scrollIntoView({ behavior: "smooth" });
//       }
//     };
//     // Add event listeners for wheel and touch
//     window.addEventListener("wheel", handleWheel);
//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchmove", handleTouchMove);
//     // Cleanup listeners
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, [currentStage, scrollLocked]);

//   return (
//     <div className="relative h-fit lg:h-screen w-full text-white flex items-center justify-center bg-transparent">
//       <video
//         className={`absolute top-0 left-0 w-full object-cover h-full`}
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src={loopVideo} type="video/mp4" />
//       </video>
//       <div className="text-center h-full bg-transparent z-10">
//         <h2
//           className="text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] font-giloryB my-14 mb-16"
//           ref={topRef}
//         >
//           How it Works?
//         </h2>

//         {/* Stage card */}
//         <div className="relative lg:absolute lg:right-20 2xl:right-64 bg-transparent backdrop-blur-md rounded-2xl border border-white/40 w-[300px] h-[240px] md:w-[714px] md:h-[487px] lg:w-[40vw] lg:h-[60vh] items-center justify-center mx-auto">
//           <img
//             src={stages[currentStage]?.image}
//             alt={stages[currentStage]?.title || "Default Title"}
//             className="w-full h-full object-contain"
//           />
//           <img
//             ref={sectionRef} // Attach topRef to the element to trigger reverse scrolling
//             src={star}
//             alt="Home construction Bengaluru"
//             className="absolute right-0 -bottom-5 md:-bottom-8 w-10 md:w-16"
//           />
//           <img
//             src={star}
//             alt="Home construction Bengaluru"
//             className="absolute -right-2 md:-right-4 bottom-2 w-5 md:w-8"
//           />
//         </div>

//         {/* Stage number */}
//         <h3 className="lg:absolute left-20 2xl:left-64 top-52 text-[24px] md:text-[32px] lg:text-[40px] 2xl:top-64 font-giloryS text-[#ffb969] mt-10 mb-4 ">
//           {stages[currentStage]?.title || "Default Title"}
//         </h3>
//         <p className="lg:absolute lg:text-left lg:left-20 2xl:left-64 lg:top-80 2xl:top-96 text-[16px] md:text-[18px] lg:text-[24px] font-giloryM  w-[400px] lg:w-[500px] mx-auto">
//           {stages[currentStage]?.description || "Default Description"}
//         </p>
//       </div>
//       <div className="absolute left-[6%] lg:left-2 2xl:left-64 -bottom-24 2xl:bottom-20 text-[200px] text-stroke font-larken z-0">
//         {stages[currentStage]?.number || 0}
//       </div>
//     </div>
//   );
// }

// export default WorkingLaptop;

// // function WorkingLaptop() {


// // gsap.utils.toArray(".stage").forEach((stage) => {
// //   gsap.fromTo(
// //     stage,
// //     { opacity: 1, scale: 1 },
// //     {
// //       opacity: 0,
// //       scale: 0.8,
// //       ease: "power1.out",
// //       scrollTrigger: {
// //         trigger: stage,
// //         start: "top 80%",    // fade starts earlier
// //         end: "+=900",        // longer fade distance
// //         scrub: true,
// //         pin: true,
// //         pinSpacing: true,    // allow smooth gap before next card
// //       }
// //     }
// //   );
// // });

   

      
     


// //   return (
// //     <div className="relative  h-screen w-full text-white flex items-center justify-center bg-transparent">
// //       <video
     
// //         className={`absolute top-0 left-0 w-full object-cover h-full z-1`}
// //         autoPlay
// //         muted
// //         loop
// //         playsInline
// //       >
// //         <source src={loopVideo} type="video/mp4" />
// //       </video>
// //       <div className="text-center h-full bg-transparent z-10">
// //         <h2
// //           className="text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] font-giloryB my-14 mb-16"
         
// //         >
// //           How it Works?
// //         </h2>

// //         {/* Stage card */}
        
// //         {stages.map((stage, index) => (
// //           < div key={index} className=" sticky stage flex flex-col">
// //         <div className="  relative  bg-transparent backdrop-blur-md rounded-2xl border border-white/40 w-[300px] h-[240px] md:w-[714px] md:h-[487px] lg:w-[40vw] lg:h-[60vh] items-center justify-center mx-auto">
// //           <img
// //     src={stage.image}
// //               alt={stage.title}
// //             className="w-full h-full object-contain"
// //           />
// //           <img
            
// //             src={star}
// //             alt="Home construction Bengaluru"
// //             className="absolute right-0 -bottom-5 md:-bottom-8 w-10 md:w-16"
// //           />
// //           <img
// //             src={star}
// //             alt="Home construction Bengaluru"
// //             className="absolute -right-2 md:-right-4 bottom-2 w-5 md:w-8"
// //           />
// //         </div>

// //              <div className="flex ">
// //                <span className="text-[400px] font-larken text-white/10">
// //               {stage.number}
// //             </span>
// //           <div className="flex flex-col gap-8 ">
// //             <h3 className="text-3xl font-bold text-[32px] md:text-[40px] lg:text-[48px] mt-3 text-[#ffb969]">{stage.title}</h3>
              
// //             <p className="text-[16px]  md:text-[18px] lg:text-[24px] max-w-xl">{stage.description}</p>
// //             </div>
// //             </div>
// //             </div>

// //         ))}

        
      
// //     </div>
// //     </div>
// //   );
// // }
// // export default WorkingLaptop











import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

function WorkingLaptop() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const stageImageRef = useRef(null);
  const stageTitleRef = useRef(null);
  const stageDescRef = useRef(null);
  const stageNumberRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const stageImage = stageImageRef.current;
    const stageTitle = stageTitleRef.current;
    const stageDesc = stageDescRef.current;
    const stageNumber = stageNumberRef.current;

    if (!container) return;

    // Create timeline for the entire section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${stages.length * 100}vh`, // Total scroll distance
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Calculate current stage based on progress
          const progress = self.progress;
          const stageIndex = Math.min(
            Math.floor(progress * stages.length),
            stages.length - 1
          );
          const currentStage = stages[stageIndex];

          // Update content
          if (stageImage) stageImage.src = currentStage.image;
          if (stageTitle) stageTitle.textContent = currentStage.title;
          if (stageDesc) stageDesc.textContent = currentStage.description;
          if (stageNumber) stageNumber.textContent = currentStage.number;
        },
        onComplete: () => {
          // Unpin and allow normal scrolling after all stages
          ScrollTrigger.refresh();
        }
      }
    });

    // Animate stage transitions
    stages.forEach((stage, index) => {
      const stageProgress = index / (stages.length - 1);
      const nextStageProgress = (index + 1) / (stages.length - 1);

      // Fade and scale animations for each stage transition
      if (index > 0) {
        tl.to(stageImage, {
          scale: 0.9,
          opacity: 0.7,
          duration: 0.3,
          ease: "power2.inOut"
        }, stageProgress)
        .to(stageImage, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut"
        }, stageProgress + 0.3);
      }

      // Animate title and description
      tl.fromTo(stageTitle, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        stageProgress + 0.2
      )
      .fromTo(stageDesc,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        stageProgress + 0.3
      )
      .fromTo(stageNumber,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
        stageProgress + 0.1
      );
    });

    // Animate stars
    starsRef.current.forEach((star, index) => {
      if (star) {
        gsap.set(star, { rotation: 0 });
        gsap.to(star, {
          rotation: 360,
          duration: 20 + index * 5,
          repeat: -1,
          ease: "none"
        });
      }
    });

    // Video background animation
    gsap.fromTo(video, 
      { scale: 1.1 },
      {
        scale: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "top top",
          scrub: 1
        }
      }
    );

    // Title entrance animation
    gsap.fromTo(titleRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        className="relative h-screen w-full text-white flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={loopVideo} type="video/mp4" />
        </video>

        {/* Main Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          {/* Title */}
          <h2
            ref={titleRef}
            className="text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] font-giloryB mb-16 text-center"
          >
            How it Works?
          </h2>

          {/* Stage Layout */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Stage Card */}
            <div className="relative lg:absolute lg:right-20 2xl:right-64 bg-transparent backdrop-blur-md rounded-2xl border border-white/40 w-[300px] h-[240px] md:w-[714px] md:h-[487px] lg:w-[40vw] lg:h-[60vh] flex items-center justify-center overflow-hidden">
              <img
                ref={stageImageRef}
                src={stages[0].image}
                alt={stages[0].title}
                className="w-full h-full object-contain transition-all duration-500"
              />
              
              {/* Decorative Stars */}
              <img
                ref={el => starsRef.current[0] = el}
                src={star}
                alt="Decoration"
                className="absolute right-0 -bottom-5 md:-bottom-8 w-10 md:w-16"
              />
              <img
                ref={el => starsRef.current[1] = el}
                src={star}
                alt="Decoration"
                className="absolute -right-2 md:-right-4 bottom-2 w-5 md:w-8"
              />
            </div>

            {/* Stage Content */}
            <div className="lg:absolute lg:left-20 2xl:left-64 lg:top-52 2xl:top-64 text-center lg:text-left">
              <h3 
                ref={stageTitleRef}
                className="text-[24px] md:text-[32px] lg:text-[40px] font-giloryS text-[#ffb969] mb-4"
              >
                {stages[0].title}
              </h3>
              <p 
                ref={stageDescRef}
                className="text-[16px] md:text-[18px] lg:text-[24px] font-giloryM w-[400px] lg:w-[500px] mx-auto lg:mx-0"
              >
                {stages[0].description}
              </p>
            </div>

            {/* Stage Number */}
            <div 
              ref={stageNumberRef}
              className="absolute left-[6%] lg:left-2 2xl:left-64 -bottom-24 2xl:bottom-20 text-[200px] text-stroke font-larken z-0"
            >
              {stages[0].number}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for next section */}
      <div className="h-20 bg-transparent"></div>
    </>
  );
}

export default WorkingLaptop;