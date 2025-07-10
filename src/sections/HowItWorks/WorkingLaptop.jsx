// import React, { useEffect, useState, useRef } from "react";
// import meetUs from "../../assets/images/meetUs.webp";
// import designWork from "../../assets/images/designWork.webp";
// import finalize from "../../assets/images/finalize.webp";
// import track from "../../assets/images/track1.webp";
// import handover from "../../assets/images/handover.webp";
// import star from "../../assets/images/star.webp";
// import loopVideo from "../../assets/videos/loopVideo.mp4";
// // import SplineCanvas from "./SplineCanvas";

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
//   const [currentStage, setCurrentStage] = useState(0);
//   const [scrollLocked, setScrollLocked] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const sectionRef = useRef(null);
//   const topRef = useRef(null);
//   const nextSectionRef = useRef(null);

//   // Intersection observer for the main section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           if (!scrolled) {
//             setScrollLocked(true); // Lock scrolling when the section is in view
//           } // Reset to ensure proper logic for downward scrolling
//         }
//       },
//       { threshold: 1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) observer.disconnect();
//     };
//   }, [scrolled]);
//   // Intersection observer for the top element (reverse scroll)
//   useEffect(() => {
//     const topObserver = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           if (scrolled) {
//             setScrollLocked(true); // Lock scroll when at the top and reverse scrolling
//           }
//         }
//       },
//       { threshold: 1 }
//     );
//     if (topRef.current) {
//       topObserver.observe(topRef.current);
//     }
//     return () => {
//       if (topRef.current) topObserver.disconnect();
//     };
//   }, [scrolled]);
//   // Prevent page scrolling when `scrollLocked` is true
//   useEffect(() => {
//     const preventScroll = (e) => e.preventDefault();
//     document.body.style.overflowY = scrollLocked ? "hidden" : "";
//     if (scrollLocked) {
//       document.addEventListener("touchmove", preventScroll, { passive: false });
//     } else {
//       document.removeEventListener("touchmove", preventScroll);
//     }
//     return () => {
//       document.removeEventListener("touchmove", preventScroll);
//     };
//   }, [scrollLocked]);

//   // Scroll event handler
//   useEffect(() => {
//     let scrollCount = 0;
//     let touchStartY = 0;
//     const handleWheel = (e) => {
//       if (!scrollLocked) return;
//       scrollCount += Math.sign(e.deltaY);
//       handleScrollLogic(scrollCount);
//     };
//     const handleTouchStart = (e) => {
//       touchStartY = e.touches[0].clientY;
//     };

//     const handleTouchMove = (e) => {
//       if (!scrollLocked) return;

//       const touchEndY = e.touches[0].clientY;
//       const deltaY = touchStartY - touchEndY; // Calculate the vertical movement
//       touchStartY = touchEndY; // Update the starting point for the next move

//       scrollCount += deltaY; // Accumulate the total scroll amount

//       const touchThreshold = 200; // Threshold for triggering stage changes (higher = slower transitions)

//       if (scrollCount >= touchThreshold) {
//         handleScrollLogic(4); // Pass "1" for forward scroll
//         scrollCount = 0; // Reset scroll count after triggering
//       } else if (scrollCount <= -touchThreshold) {
//         handleScrollLogic(-4); // Pass "-1" for reverse scroll
//         scrollCount = 0; // Reset scroll count after triggering
//       }
//     };

//     const handleScrollLogic = (scroll) => {
//       // Forward scroll (downward)
//       if (scroll >= 4 && currentStage < stages.length - 1) {
//         setCurrentStage((prev) => prev + 1);
//         scrollCount = 0;
//       }
//       // Reverse scroll (upward)
//       if (scroll <= -4 && currentStage > 0) {
//         setCurrentStage((prev) => prev - 1);
//         scrollCount = 0;
//       }
//       // Unlock scrolling at the last stage
//       if (currentStage === stages.length - 1 && scroll >= 4) {
//         setScrollLocked(false);
//         setScrolled(true);
//         document.body.style.overflow = ""; // Allow scrolling
//         nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
//       }
//       // Unlock scrolling at the first stage (reverse scroll)
//       if (currentStage === 0 && scroll <= -4) {
//         setScrollLocked(false);
//         setScrolled(false);
//         document.body.style.overflow = ""; // Allow scrolling
//         topRef.current?.scrollIntoView({ behavior: "smooth" });
//       }
//     };
//     // Add event listeners for wheel and touch
//     window.addEventListener("wheel", handleWheel);
//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchmove", handleTouchMove);
//     // Cleanup listeners
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, [currentStage, scrollLocked]);

//   return (
//     <div className="relative h-fit lg:h-screen w-full text-white flex items-center justify-center bg-transparent">
//       <video
//         className={`absolute top-0 left-0 w-full object-cover h-full`}
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src={loopVideo} type="video/mp4" />
//       </video>
//       <div className="text-center h-full bg-transparent z-10">
//         <h2
//           className="text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] font-giloryB my-14 mb-16"
//           ref={topRef}
//         >
//           How it Works?
//         </h2>

//         {/* Stage card */}
//         <div className="relative lg:absolute lg:right-20 2xl:right-64 bg-transparent backdrop-blur-md rounded-2xl border border-white/40 w-[300px] h-[240px] md:w-[714px] md:h-[487px] lg:w-[40vw] lg:h-[60vh] items-center justify-center mx-auto">
//           <img
//             src={stages[currentStage]?.image}
//             alt={stages[currentStage]?.title || "Default Title"}
//             className="w-full h-full object-contain"
//           />
//           <img
//             ref={sectionRef} // Attach topRef to the element to trigger reverse scrolling
//             src={star}
//             alt="Home construction Bengaluru"
//             className="absolute right-0 -bottom-5 md:-bottom-8 w-10 md:w-16"
//           />
//           <img
//             src={star}
//             alt="Home construction Bengaluru"
//             className="absolute -right-2 md:-right-4 bottom-2 w-5 md:w-8"
//           />
//         </div>

//         {/* Stage number */}
//         <h3 className="lg:absolute left-20 2xl:left-64 top-52 text-[24px] md:text-[32px] lg:text-[40px] 2xl:top-64 font-giloryS text-[#ffb969] mt-10 mb-4 ">
//           {stages[currentStage]?.title || "Default Title"}
//         </h3>
//         <p className="lg:absolute lg:text-left lg:left-20 2xl:left-64 lg:top-80 2xl:top-96 text-[16px] md:text-[18px] lg:text-[24px] font-giloryM  w-[400px] lg:w-[500px] mx-auto">
//           {stages[currentStage]?.description || "Default Description"}
//         </p>
//       </div>
//       <div className="absolute left-[6%] lg:left-2 2xl:left-64 -bottom-24 2xl:bottom-20 text-[200px] text-stroke font-larken z-0">
//         {stages[currentStage]?.number || 0}
//       </div>
//     </div>
//   );
// }

// export default WorkingLaptop;

// import React, { useEffect, useState, useRef } from "react";
// import meetUs from "../../assets/images/meetUs.webp";
// import designWork from "../../assets/images/designWork.webp";
// import finalize from "../../assets/images/finalize.webp";
// import track from "../../assets/images/track1.webp";
// import handover from "../../assets/images/handover.webp";
// import star from "../../assets/images/star.webp";
// import loopVideo from "../../assets/videos/loopVideo.mp4";
// // import SplineCanvas from "./SplineCanvas";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register GSAP plugin
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

// const WorkingLaptop = () => {
//   useEffect(() => {
//     gsap.utils.toArray(".step").forEach((step) => {
//       gsap.to(step, {
//         scale: 0.7,
//         opacity: 0,
//         scrollTrigger: {
//           trigger: step,
//           start: "top 15%",
//           end: "bottom 15%",
//           scrub: true,
//           markers: true, // Disable markers for production
//           invalidateOnRefresh: true, // Recalculate on resize
//         },
//       });
//     });
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full bg-black">
//       {/* Background Video */}
//       {/* <video
//       className="fixed top-0 left-0 w-full h-full object-cover z-0"
//       autoPlay
//       muted
//       loop
//       playsInline
//     >
//       <source src={loopVideo} type="video/mp4" />
//     </video> */}

//       {/* Overlay */}
//       {/* <div className="fixed inset-0 bg-black/50 z-10"></div> */}

//       {/* Content */}
//       <div className="relative z-20 text-white">
//         <div className="text-center py-20">
//           <h2 className="text-4xl lg:text-6xl font-bold mb-20">
//             How it Works?
//           </h2>
//         </div>

//         {/* Stages */}
//         <div className="w-full flex flex-col items-center justify-center gap-8 px-8 pt-[15vh] pb-[20vh]">
//           {stages.map((stage, index) => (
//             <div
//               key={index}
//               className="step flex sticky top-[15vh] flex-col items-center gap-4   "
//             >
//               <div className="relative w-full max-w-4xl bg-transparent backdrop-blur-md rounded-2xl border border-white/40">
//                 {/* External Image #1 */}
//                 <img
//                   src={stage.image}
//                   alt={stage.title}
//                   className="w-full h-auto object-contain"
//                 />

//                 {/* Decor image 1 */}
//                 <img
//                   src="data:image/webp;base64,UklGRuwBAABXRUJQVlA4WAoAAAAQAAAAQAAAQAAAQUxQSEEBAAABgBDbdtzmQRCEz6BmYEEIg5iBzUBhIAgyg0IQBEP4EAThdfEi/U8gIiYAw1/wLi14K4zOgjI7W8gWfCnJ6CqSZHX1/Y+TI+FpdlTOWnAjvCxu9IqTk4U3qw/RO9xcFN5u4mDjw2pP+HizJvqM0djBjk1M7eyqYmhnZxUzO7ur2Ag7B6pYkINDdRoXlaM/ozYaLDJCKk3qu1v4NFot0icqLX/kWaw0rlluhfWgxxIvYm70qnkCUqNvfWNRV3UGINlPnXEu6qPOuJsctBUPRa3lgMehmNIZXTdDOaDzpEbaiv6iJnTCyPBt4BAMTsNKwPA0KMNiGpJgMw1IsJq6FdhNnSos5y4aTGHvoALb4Xj2gnXRJwn2pwcKj9s9cYH9ToLPoFcKr/Hqyw3SWYHj40Q8xX8FrjNJ8RWUBc4XijesGA4AVlA4IIQAAAAQBgCdASpBAEEAPkUcikQioaEa1AAoBES0gGk4HUWVWkk3+tSsopbpMI/9Wq4A7XxXLxOxglxOHFAA/v1uirM//++jnGVn//3xkNmHEwpc///vpKTf+gfFTTttKg2n/FDhClhAhP//WtFxL2SfA/+48AZjYtH//WtIUD1f/RbQAAAAAAA="
//                   alt="Home construction Bengaluru"
//                   className="object-cover aspect-square absolute bottom-0 left-0 z-40"
//                 />

//                 {/* Decor image 2 */}
//                 <img
//                   src="data:image/webp;base64,UklGRuwBAABXRUJQVlA4WAoAAAAQAAAAQAAAQAAAQUxQSEEBAAABgBDbdtzmQRCEz6BmYEEIg5iBzUBhIAgyg0IQBEP4EAThdfEi/U8gIiYAw1/wLi14K4zOgjI7W8gWfCnJ6CqSZHX1/Y+TI+FpdlTOWnAjvCxu9IqTk4U3qw/RO9xcFN5u4mDjw2pP+HizJvqM0djBjk1M7eyqYmhnZxUzO7ur2Ag7B6pYkINDdRoXlaM/ozYaLDJCKk3qu1v4NFot0icqLX/kWaw0rlluhfWgxxIvYm70qnkCUqNvfWNRV3UGINlPnXEu6qPOuJsctBUPRa3lgMehmNIZXTdDOaDzpEbaiv6iJnTCyPBt4BAMTsNKwPA0KMNiGpJgMw1IsJq6FdhNnSos5y4aTGHvoALb4Xj2gnXRJwn2pwcKj9s9cYH9ToLPoFcKr/Hqyw3SWYHj40Q8xX8FrjNJ8RWUBc4XijesGA4AVlA4IIQAAAAQBgCdASpBAEEAPkUcikQioaEa1AAoBES0gGk4HUWVWkk3+tSsopbpMI/9Wq4A7XxXLxOxglxOHFAA/v1uirM//++jnGVn//3xkNmHEwpc///vpKTf+gfFTTttKg2n/FDhClhAhP//WtFxL2SfA/+48AZjYtH//WtIUD1f/RbQAAAAAAA="
//                   alt="Home construction Bengaluru bottom-0 left-0 "
//                   className=""
//                 />
//               </div>

//               {/* Text content below the box */}

//               {/* <h3 className="text-2xl font-bold">{stage.title}</h3>
//               <p className="text-lg">{stage.description}</p>
//               <p className="text-5xl font-bold">{stage.number}</p> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default WorkingLaptop;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import meetUs from "../../assets/images/meetUs.webp";
import designWork from "../../assets/images/designWork.webp";
import finalize from "../../assets/images/finalize.webp";
import track from "../../assets/images/track1.webp";
import handover from "../../assets/images/handover.webp";
import loopVideo from "../../assets/videos/loopVideo.mp4";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    title: "Meet us",
    description:
      "Begin your home construction journey by scheduling a meeting...",
    image: meetUs,
    number: 1,
  },
  {
    title: "Design",
    description: "Our architects will create a home design tailored to you...",
    image: designWork,
    number: 2,
  },
  {
    title: "Finalize",
    description: "With your confirmation, we'll finalize the budget...",
    image: finalize,
    number: 3,
  },
  {
    title: "Track",
    description: "Track construction progress through our app...",
    image: track,
    number: 4,
  },
  {
    title: "Handover",
    description: "We hand over your dream home on time and within budget...",
    image: handover,
    number: 5,
  },
];

const WorkingLaptop = () => {
  useEffect(() => {
    gsap.utils.toArray(".stage").forEach((stage) => {
      gsap.to(stage, {
        opacity: 0,
        scale: 0.8,
        scrollTrigger: {
          trigger: stage,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
          markers: false,
        },
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full text-white bg-black overflow-x-hidden">
      {/* Background Video */}
      {/* <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={loopVideo} type="video/mp4" />
      </video> */}

      {/* Overlay (optional blur/dark) */}
      <div className="fixed inset-0 bg-black/60 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center pt-[15vh] pb-[20vh] px-4">
        <h2 className="text-4xl lg:text-6xl font-bold mb-20 text-center">
          How it Works?
        </h2>

        {stages.map((stage, index) => (
          <div
            key={index}
            className="stage sticky top-[15vh] w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 p-8 flex flex-col items-center text-center gap-4"
          >
            <img
              src={stage.image}
              alt={stage.title}
              className="w-full max-h-[300px] object-contain"
            />
            <h3 className="text-3xl font-bold text-[#ffb969]">{stage.title}</h3>
            <p className="text-lg max-w-xl">{stage.description}</p>
            <span className="text-[120px] font-larken text-white/10">
              {stage.number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingLaptop;
