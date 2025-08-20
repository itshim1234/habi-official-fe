// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import React, { useEffect, useRef } from "react";
// import meetUs from "../../assets/images/meetUs.webp";
// import designWork from "../../assets/images/designWork.webp";
// import finalize from "../../assets/images/finalize.webp";
// import track from "../../assets/images/track1.webp";
// import handover from "../../assets/images/handover.webp";
// import star from "../../assets/images/star.webp";
// import loopVideo from "../../assets/videos/loopVideo.mp4";

// gsap.registerPlugin(ScrollTrigger);

// // Stage data
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

// const WorkingMobile = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const items = gsap.utils.toArray(containerRef.current.querySelectorAll(".stage-box"));

//       // Initial setup - hide all except first
//       gsap.set(items, { autoAlpha: 0, y: 30 });
//       gsap.set(items[0], { autoAlpha: 1, y: 0 }); // First box visible

//       // Create timeline with mobile-optimized settings
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: () => `+=${stages.length * 120}%`, // More space for mobile
//           scrub: 0.8, // Faster scrub for mobile responsiveness
//           pin: true,
//           pinReparent: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//           refreshPriority: 1,
//           // Mobile-specific optimizations
//           scroller: window,
//           normalizeScroll: true, // Better mobile touch handling
//           fastScrollEnd: true,
//         },
//       });

//       // Animate each stage with mobile-optimized timing
//       items.forEach((item, i) => {
//         if (i === 0) return; // Skip first item as it's already visible

//         const prevItem = items[i - 1];

//         // Mobile-optimized transitions
//         tl.to(prevItem, {
//           autoAlpha: 0,
//           y: -30,
//           duration: 0.4,
//           ease: "power2.inOut"
//         }, i * 1.2) // More time per stage for mobile
//         .to(item, {
//           autoAlpha: 1,
//           y: 0,
//           duration: 0.5,
//           ease: "power2.out"
//         }, i * 1.2 + 0.15); // Slight overlap for smoother transition
//       });

//       // Fade out the last item at the end
//       tl.to(items[items.length - 1], {
//         autoAlpha: 0,
//         y: -30,
//         duration: 0.4,
//         ease: "power2.inOut"
//       }, items.length * 1.2);

//     }, containerRef);

//     // Ensure proper measurements after assets load
//     const onLoad = () => ScrollTrigger.refresh();
//     window.addEventListener('load', onLoad);

//     return () => {
//       window.removeEventListener('load', onLoad);
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <div>
//       <section
//         ref={containerRef}
//         style={{
//           height: "100vh",
//           position: "relative",
//           color: "#fff",
//           overflow: "hidden",
//           // Mobile-specific optimizations
//           touchAction: "pan-y",
//           WebkitOverflowScrolling: "touch",
//         }}
//       >
//         {/* Background video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="metadata"
//         >
//           <source src={loopVideo} type="video/mp4" />
//         </video>

//         {/* Dark overlay for better readability on mobile */}
//         <div className="absolute inset-0 bg-black/30 z-5"></div>

//         {/* Content overlay */}
//         <div className="z-10 relative h-full">
//           {/* Title overlay - mobile optimized positioning */}
//           <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 text-center z-30 w-full">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
//               How it Works?
//             </h2>
//           </div>

//           {/* Stage boxes container - mobile optimized */}
//           <div className="h-full flex items-center justify-center px-4 py-8">
//             <div
//               style={{
//                 position: "relative",
//                 width: "100%",
//                 maxWidth: "1200px",
//                 height: "100%",
//                 margin: "0 auto",
//               }}
//             >
//               {stages.map((stage, index) => (
//                 <div
//                   key={index}
//                   className="stage-box absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center gap-6 px-4"
//                   style={{ opacity: index === 0 ? 1 : 0 }}
//                 >
//                   {/* Framed Illustration - mobile optimized sizing */}
//                   <div className="relative border border-white/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-center w-[280px] h-[200px] sm:w-[400px] sm:h-[280px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] bg-black/25 backdrop-blur-sm shadow-xl">
//                     <img
//                       src={stage.image}
//                       alt={stage.title}
//                       className="max-w-full max-h-full object-contain drop-shadow-md"
//                       loading={index === 0 ? "eager" : "lazy"}
//                     />
//                     {/* Decorative stars - responsive sizing */}
//                     <img
//                       src={star}
//                       alt=""
//                       className="absolute -right-1 -bottom-3 sm:-right-2 sm:-bottom-4 w-6 sm:w-10 lg:w-12"
//                     />
//                     <img
//                       src={star}
//                       alt=""
//                       className="absolute right-1 bottom-1 sm:right-2 sm:bottom-2 w-3 sm:w-5 lg:w-6"
//                     />
//                   </div>

//                   {/* Content - mobile optimized */}
//                   <div className="relative flex flex-col items-center text-center max-w-lg">
//                     {/* Styled stage number - mobile responsive */}
//                     <span
//                       className="absolute pointer-events-none font-black leading-none select-none z-0"
//                       style={{
//                         fontSize: 'clamp(80px, 18vw, 300px)',
//                         bottom: 'clamp(-40px, -10vw, -100px)',
//                         left: 'clamp(-80px, -15vw, -200px)',
//                         color: 'transparent',
//                         WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
//                         filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.1))',
//                       }}
//                     >
//                       {stage.number}
//                     </span>

//                     <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ffb969] relative z-10 mb-3 drop-shadow-md">
//                       {stage.title}
//                     </h3>
//                     <p className="text-sm sm:text-base lg:text-lg leading-relaxed relative z-10 max-w-md text-white/90 drop-shadow-sm">
//                       {stage.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WorkingMobile;

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import meetUs from "../../assets/images/meetUs.webp";
import designWork from "../../assets/images/designWork.webp";
import finalize from "../../assets/images/finalize.webp";
import track from "../../assets/images/track1.webp";
import handover from "../../assets/images/handover.webp";
import star from "../../assets/images/star.webp";
import loopVideo from "../../assets/videos/loopVideo.mp4";

gsap.registerPlugin(ScrollTrigger);

// Stage data remains the same
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

  useEffect(() => {
    // FIX: Add event listeners to prevent flicker on resize
    const onRefreshStart = () =>
      gsap.set(containerRef.current, { autoAlpha: 0 });
    const onRefreshEnd = () => gsap.set(containerRef.current, { autoAlpha: 1 });

    ScrollTrigger.addEventListener("refreshInit", onRefreshStart);
    ScrollTrigger.addEventListener("refresh", onRefreshEnd);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(
        containerRef.current.querySelectorAll(".stage-box")
      );

      gsap.set(items, { autoAlpha: 0, y: 30 });
      gsap.set(items[0], { autoAlpha: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${stages.length * 120}%`,
          scrub: 0.8,
          pin: true,
          pinReparent: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          normalizeScroll: true,
        },
      });

      items.forEach((item, i) => {
        if (i === 0) return;
        const prevItem = items[i - 1];

        tl.to(
          prevItem,
          {
            autoAlpha: 0,
            y: -30,
            duration: 0.4,
            ease: "power2.inOut",
          },
          i * 1.2
        ).to(
          item,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          i * 1.2 + 0.4
        );
      });

      tl.to(
        items[items.length - 1],
        {
          autoAlpha: 0,
          y: -30,
          duration: 0.4,
          ease: "power2.inOut",
        },
        items.length * 1.2
      );
    }, containerRef);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      // FIX: Important to remove listeners and revert GSAP context on cleanup
      window.removeEventListener("load", onLoad);
      ScrollTrigger.removeEventListener("refreshInit", onRefreshStart);
      ScrollTrigger.removeEventListener("refresh", onRefreshEnd);
      ctx.revert();
    };
  }, []);

  return (
    <div>
      <section
        ref={containerRef}
        style={{
          height: "100vh",
          position: "relative",
          color: "#fff",
          overflow: "hidden",
          touchAction: "pan-y",
          WebkitOverflowScrolling: "touch",
          visibility: "visible", // Ensure it's visible initially for the fix to work
        }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={loopVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30 z-5"></div>

        <div className="z-10 relative h-full">
          <div className="absolute top-6 sm:top-8 md:top-10 left-1/2 -translate-x-1/2 px-4 text-center z-30 w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              How it Works?
            </h2>
          </div>

          <div className="h-full flex items-center justify-center px-4 py-10">
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "1200px",
                height: "100%",
                margin: "0 auto",
              }}
            >
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className="stage-box absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start text-center gap-6 px-4 pt-8 pb-20"
                  style={{ opacity: index === 0 ? 1 : 0 }}
                >
                  <div className="relative border my-30 border-white/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-center w-[280px] h-[200px] sm:w-[400px] sm:h-[280px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] bg-black/25 backdrop-blur-sm shadow-xl">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="max-w-full max-h-full object-contain drop-shadow-md"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <img
                      src={star}
                      alt=""
                      className="absolute -right-1 -bottom-3 sm:-right-2 sm:-bottom-4 w-6 sm:w-10 lg:w-12"
                    />
                    <img
                      src={star}
                      alt=""
                      className="absolute right-1 bottom-1 sm:right-2 sm:bottom-2 w-3 sm:w-5 lg:w-6"
                    />
                  </div>

                  <div className="relative flex flex-col items-center text-center max-w-lg pb-16">
                    <span
                      className="absolute pointer-events-none font-black leading-none select-none z-0"
                      style={{
                        fontSize: "clamp(80px, 18vw, 300px)",
                        bottom: "clamp(0px, 2vw, 24px)",
                        left: "clamp(-80px, -15vw, -200px)",
                        color: "transparent",
                        WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)",
                        filter:
                          "drop-shadow(0 0 10px rgba(255, 255, 255, 0.1))",
                      }}
                    >
                      {stage.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ffb969] relative z-10 mb-4 drop-shadow-md">
                      {stage.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-4 px-4 py-2 bg-black/40 rounded-lg text-white/90 drop-shadow-sm">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkingMobile;
