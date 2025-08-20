// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import React, { useEffect, useRef } from "react";
// // import meetUs from "../../assets/images/meetUs.webp";
// // import designWork from "../../assets/images/designWork.webp";
// // import finalize from "../../assets/images/finalize.webp";
// // import track from "../../assets/images/track1.webp";
// // import handover from "../../assets/images/handover.webp";
// // import star from "../../assets/images/star.webp";
// // import loopVideo from "../../assets/videos/loopVideo.mp4";

// // gsap.registerPlugin(ScrollTrigger);

// // // Stage data
// // const stages = [
// //   {
// //     title: "Meet us",
// //     description:
// //       "Begin your home construction journey by scheduling a meeting through our website or app, giving us a call, or reaching out on WhatsApp.",
// //     image: meetUs,
// //     number: 1,
// //   },
// //   {
// //     title: "Design",
// //     description:
// //       "After the meeting, our architects will create a home design tailored to your requirements. We ensure that every detail matches your preferences for a perfect outcome.",
// //     image: designWork,
// //     number: 2,
// //   },
// //   {
// //     title: "Finalize",
// //     description:
// //       "With your confirmation, we'll work on a budget to bring your vision to life. We'll ensure everything is prepared for the next step smoothly.",
// //     image: finalize,
// //     number: 3,
// //   },
// //   {
// //     title: "Track",
// //     description:
// //       "As construction begins, our mobile app keeps you updated. Track daily progress from anywhere, ensuring your dream home is coming together just as you envisioned.",
// //     image: track,
// //     number: 4,
// //   },
// //   {
// //     title: "Handover",
// //     description:
// //       "We guarantee your home will be delivered on time and within budget. It's our pride and joy to hand over the keys to your new home.",
// //     image: handover,
// //     number: 5,
// //   },
// // ];

// // const WorkingLaptop = () => {
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       const items = gsap.utils.toArray(containerRef.current.querySelectorAll(".stage-box"));

// //       // Initial setup - hide all except first
// //       gsap.set(items, { autoAlpha: 0, y: 50 });
// //       gsap.set(items[0], { autoAlpha: 1, y: 0 }); // First box visible

// //       // Create timeline with proper sequencing
// //       const tl = gsap.timeline({
// //         scrollTrigger: {
// //           trigger: containerRef.current,
// //           start: "top top",
// //           end: () => `+=${stages.length * 100}%`,
// //           scrub: 1, // Smoother scrubbing
// //           pin: true,
// //           pinReparent: true,
// //           anticipatePin: 1,
// //           invalidateOnRefresh: true,
// //           refreshPriority: 1,
// //           // Explicitly set scroller to window to avoid custom container issues
// //           scroller: window,
// //         },
// //       });

// //       // Animate each stage properly
// //       items.forEach((item, i) => {
// //         if (i === 0) return; // Skip first item as it's already visible

// //         const prevItem = items[i - 1];
        
// //         // At each stage transition:
// //         // 1. Fade out previous item
// //         // 2. Fade in current item
// //         tl.to(prevItem, {
// //           autoAlpha: 0,
// //           y: -50,
// //           duration: 0.5,
// //           ease: "power2.inOut"
// //         }, i * 1) // Each stage takes 1 unit of timeline
// //         .to(item, {
// //           autoAlpha: 1,
// //           y: 0,
// //           duration: 0.5,
// //           ease: "power2.out"
// //         }, i * 1 + 0.2); // Slight overlap for smoother transition
// //       });

// //       // Fade out the last item at the end
// //       tl.to(items[items.length - 1], {
// //         autoAlpha: 0,
// //         y: -50,
// //         duration: 0.5,
// //         ease: "power2.inOut"
// //       }, items.length * 1);

// //     }, containerRef);

// //     // Ensure proper measurements after assets load
// //     const onLoad = () => ScrollTrigger.refresh();
// //     window.addEventListener('load', onLoad);

// //     return () => {
// //       window.removeEventListener('load', onLoad);
// //       ctx.revert();
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       <section
// //         ref={containerRef}
// //         style={{
// //           height: "100vh",
// //           position: "relative",
// //           color: "#fff",
// //           overflow: "hidden",
// //         }}
// //       >
// //         {/* Background video */}
// //         <video
// //           className="absolute top-0 left-0 w-full h-full object-cover z-0"
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //         >
// //           <source src={loopVideo} type="video/mp4" />
// //         </video>

// //         {/* Content overlay */}
// //         <div className="z-10 relative h-full flex flex-col ">
// //           {/* Fixed title at top */}
// //           <div className="pt-4 sm:pt-6 lg:pt-4 px-4 text-center">
// //             <h2 className="text-4xl lg:text-6xl font-bold text-white">
// //               How it Works?
// //             </h2>
// //           </div>

// //           {/* Stage boxes container */}
// //           <div className="flex-1 flex items-center justify-center px-4">
// //             <div
// //               style={{
// //                 position: "relative",
// //                 width: "100%",
// //                 maxWidth: "1200px",
// //                 height: "100%",
// //                 margin: "0 auto",
// //               }}
// //             >
// //               {stages.map((stage, index) => (
// //                 <div
// //                   key={index}
// //                   className="stage-box absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center gap-8 px-4"
// //                   style={{ opacity: index === 0 ? 1 : 0 }}
// //                 >
// //                   {/* Framed Illustration */}
// //                   <div className="relative border border-white/40 rounded-2xl p-8 flex items-center justify-center w-[300px] h-[240px] md:w-[714px] md:h-[487px] lg:w-[40vw] lg:h-[50vh] bg-black/20 backdrop-blur-md">
// //                     <img
// //                       src={stage.image}
// //                       alt={stage.title}
// //                       className="max-w-full max-h-full object-contain"
// //                     />
// //                     {/* Decorative stars */}
// //                     <img
// //                       src={star}
// //                       alt=""
// //                       className="absolute right-0 -bottom-5 md:-bottom-8 w-10 md:w-16"
// //                     />
// //                     <img
// //                       src={star}
// //                       alt=""
// //                       className="absolute -right-2 md:-right-4 bottom-2 w-5 md:w-8"
// //                     />
// //                   </div>

// //                   {/* Content */}
// //                   <div className="relative flex flex-col items-center text-center">
// //                     {/* Styled stage number */}
// //                     <span 
// //                       className="absolute pointer-events-none font-black leading-none select-none z-0"
// //                       style={{
// //                         fontSize: 'clamp(150px, 25vw, 400px)',
// //                         bottom: 'clamp(-80px, -15vw, -150px)',
// //                         left: 'clamp(-150px, -25vw, -300px)',
// //                         color: 'transparent',
// //                         WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
// //                         filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
// //                       }}
// //                     >
// //                       {stage.number}
// //                     </span>

// //                     <h3 className="text-3xl font-bold text-[#ffb969] relative z-10">
// //                       {stage.title}
// //                     </h3>
// //                     <p className="text-[16px] md:text-[18px] lg:text-[20px] max-w-xl relative z-10">
// //                       {stage.description}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default WorkingLaptop;



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

// const WorkingLaptop = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const items = gsap.utils.toArray(containerRef.current.querySelectorAll(".stage-box"));

//       // Initial setup - hide all except first
//       gsap.set(items, { autoAlpha: 0, y: 50 });
//       gsap.set(items[0], { autoAlpha: 1, y: 0 });

//       // Create timeline with proper sequencing
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           // Increased end value to allow more scrolling for content visibility
//           end: `+=${stages.length * 150}%`, // More space per stage
//           scrub: 1,
//           pin: true,
//           pinSpacing: true, // Keep spacing to prevent layout issues
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//       });

//       // Animate each stage properly
//       items.forEach((item, i) => {
//         if (i === 0) return;

//         const prevItem = items[i - 1];
        
//         // Longer duration per stage to allow content to be fully visible
//         tl.to(prevItem, {
//           autoAlpha: 0,
//           y: -50,
//           duration: 0.4,
//           ease: "power2.inOut"
//         }, i * 1.5) // More time per stage
//         .to(item, {
//           autoAlpha: 1,
//           y: 0,
//           duration: 0.6,
//           ease: "power2.out"
//         }, i * 1.5 + 0.2);
//       });

//       // Fade out the last item
//       tl.to(items[items.length - 1], {
//         autoAlpha: 0,
//         y: -50,
//         duration: 0.4,
//         ease: "power2.inOut"
//       }, items.length * 1.5);

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div>
//       <section
//         ref={containerRef}
//         style={{
//           // Increased height to accommodate content properly
//           minHeight: "120vh", // Allow more space than viewport
//           position: "relative",
//           color: "#fff",
//           overflow: "hidden",
//         }}
//       >
//         {/* Background video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//          {/* / <source src={loopVideo} type="video/mp4" /> */}
//         </video>

//         {/* Dark overlay for better readability */}
//         <div className="absolute inset-0 bg-black/20 z-5"></div>

//         {/* Content overlay with better spacing */}
//         <div className="z-10 relative h-full flex flex-col">
//           {/* Fixed title at top with reduced padding */}
//           <div className="pt-4 sm:pt-6 px-4 text-center flex-shrink-0">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
//               How it Workss?
//             </h2>
//           </div>

//           {/* Stage boxes container with more space */}
//           <div className="flex-1 flex items-start justify-center px-4 pb-8">
//             <div
//               style={{
//                 position: "relative",
//                 width: "100%",
//                 maxWidth: "1200px",
//                 // Increased height to prevent clipping
//                 minHeight: "90vh",
//                 margin: "0 auto",
//               }}
//             >
//               {stages.map((stage, index) => (
//                 <div
//                   key={index}
//                   className="stage-box absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start text-center gap-4 sm:gap-6 px-4 py-8"
//                   style={{ opacity: index === 0 ? 1 : 0 }}
//                 >
//                   {/* Framed Illustration - reduced size for mobile */}
//                   <div className="relative border border-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-center w-[280px] h-[200px] sm:w-[500px] sm:h-[350px] lg:w-[600px] lg:h-[400px] bg-black/20 backdrop-blur-sm flex-shrink-0">
//                     <img
//                       src={stage.image}
//                       alt={stage.title}
//                       className="max-w-full max-h-full object-contain"
//                     />
                    
//                     {/* Decorative stars */}
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

//                   {/* Content with better spacing */}
//                   <div className="relative max-w-5xl">
//                     {/* Styled stage number - positioned better */}
//                     {/* <span 
//                       className=" absolute left-[300px] bottom-[500px] pointer-events-none font-black leading-none select-none z-0"
//                       style={{
                      
                        
                      
//                       }}
//                     >
//                       {stage.number}
//                     </span> */}
//                    <div className="flex flex-col">
//                     <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ffb969] relative z-10 mb-3 sm:mb-4">
//                       {stage.title}
//                     </h3>
//                     <p className="text-sm sm:text-base lg:text-lg leading-relaxed relative z-10 max-w-xl">
//                       {stage.description}
//                     </p>
//                     </div>
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

// export default WorkingLaptop;



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

// const WorkingLaptop = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const items = gsap.utils.toArray(containerRef.current.querySelectorAll(".stage-box"));

//       // Initial setup - hide all except first
//       gsap.set(items, { autoAlpha: 0, y: 50 });
//       gsap.set(items[0], { autoAlpha: 1, y: 0 }); // First box visible

//       // Create timeline with proper sequencing
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: () => `+=${stages.length * 100}%`,
//           scrub: 1, // Smoother scrubbing
//           pin: true,
//           pinReparent: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//           refreshPriority: 1,
//           // Explicitly set scroller to window to avoid custom container issues
//           scroller: window,
//         },
//       });

//       // Animate each stage properly
//       items.forEach((item, i) => {
//         if (i === 0) return; // Skip first item as it's already visible

//         const prevItem = items[i - 1];
        
//         // At each stage transition:
//         // 1. Fade out previous item
//         // 2. Fade in current item
//         tl.to(prevItem, {
//           autoAlpha: 0,
//           y: -50,
//           duration: 0.5,
//           ease: "power2.inOut"
//         }, i * 1) // Each stage takes 1 unit of timeline
//         .to(item, {
//           autoAlpha: 1,
//           y: 0,
//           duration: 0.5,
//           ease: "power2.out"
//         }, i * 1 + 0.2); // Slight overlap for smoother transition
//       });

//       // Fade out the last item at the end
//       tl.to(items[items.length - 1], {
//         autoAlpha: 0,
//         y: -50,
//         duration: 0.5,
//         ease: "power2.inOut"
//       }, items.length * 1);

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
//         }}
//       >
//         {/* Background video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src={loopVideo} type="video/mp4" />
//         </video>

//         {/* Content overlay */}
//         <div className="z-10 relative h-full">
//           {/* Title overlay (doesn't affect centering) */}
//           <div className="absolute top-3 left-1/2 -translate-x-1/2 px-4 text-center z-30 w-full">
//             <h2 className="text-4xl lg:text-6xl font-bold text-white">
//               How it Works?
//             </h2>
//           </div>

//           {/* Stage boxes container */}
//           <div className="h-full flex items-center justify-center px-4">
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
//                   className="stage-box absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center gap-8 px-4"
//                   style={{ opacity: index === 0 ? 1 : 0 }}
//                 >
//                   {/* Framed Illustration */}
//                   <div className="relative border border-white/40 rounded-2xl p-8 flex items-center justify-center w-[300px] h-[240px] md:w-[714px] md:h-[487px] lg:w-[40vw] lg:h-[50vh] bg-black/20 backdrop-blur-md">
//                     <img
//                       src={stage.image}
//                       alt={stage.title}
//                       className="max-w-full max-h-full object-contain"
//                     />
//                     {/* Decorative stars */}
//                     <img
//                       src={star}
//                       alt=""
//                       className="absolute right-0 -bottom-5 md:-bottom-8 w-10 md:w-16"
//                     />
//                     <img
//                       src={star}
//                       alt=""
//                       className="absolute -right-2 md:-right-4 bottom-2 w-5 md:w-8"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="relative flex flex-col items-center text-center">
//                     {/* Styled stage number */}
//                     <span 
//                       className="absolute pointer-events-none font-black leading-none select-none z-0"
//                       style={{
//                         fontSize: 'clamp(150px, 25vw, 400px)',
//                         bottom: 'clamp(-80px, -15vw, -150px)',
//                         left: 'clamp(-350px, -25vw, -300px)',
//                         color: 'transparent',
//                         WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
//                         filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
//                       }}
//                     >
//                       {stage.number}
//                     </span>

//                     <h3 className="text-3xl font-bold text-[#ffb969] relative z-10">
//                       {stage.title}
//                     </h3>
//                     <p className="text-[16px] md:text-[18px] lg:text-[20px] max-w-xl relative z-10">
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

// export default WorkingLaptop;



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

const WorkingLaptop = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const mm = ScrollTrigger.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const ctx = gsap.context(() => {
        const container = containerRef.current;
        if (!container) return;

        const items = gsap.utils.toArray(container.querySelectorAll(".stage-box"));

        gsap.set(items, { autoAlpha: 0, y: 50 });
        if (items[0]) gsap.set(items[0], { autoAlpha: 1, y: 0 });

        const endPercent = window.innerWidth < 1024 ? stages.length * 130 : stages.length * 100;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=${endPercent}%`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            pinReparent: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            scroller: window,
          },
          defaults: { ease: "power2.out" }
        });

        items.forEach((item, i) => {
          if (i === 0) return;
          const prevItem = items[i - 1];
          tl.to(prevItem, { autoAlpha: 0, y: -50, duration: 0.45 }, i * 1)
            .to(item, { autoAlpha: 1, y: 0, duration: 0.55 }, i * 1 + 0.15);
        });

        tl.to(items[items.length - 1], { autoAlpha: 0, y: -50, duration: 0.45 }, items.length * 1);
      }, containerRef);

      return () => ctx.revert();
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      mm.revert();
    };
  }, []);

  return (
    <div>
      <section
        ref={containerRef}
        // The flicker fix works by setting autoAlpha, so we need the component
        // to be initially visible for the first render.
        style={{
          height: "100vh",
          marginTop:"10vh",
          position: "relative",
          color: "#fff",
          overflow: "hidden",
          visibility: "visible", // Ensure it's visible initially
        }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={loopVideo} type="video/mp4" />
        </video>

        <div className="z-10 relative h-full">
          <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 px-4 text-center z-30 w-full">
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              How it Works?
            </h2>
          </div>

          <div className="h-full flex items-start justify-center px-4 pb-8">
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "1200px",
                minHeight: "90vh",
                margin: "0 auto",
              }}
            >
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className="stage-box absolute top-[50px] left-0 w-full h-full flex flex-col items-center justify-start text-center gap-8 px-4 py-8"
                  style={{ opacity: index === 0 ? 1 : 0 }}
                >
                  <div className="relative border border-white/40 rounded-2xl p-8 flex items-center justify-center md:w-[400px] md:h-[350px] lg:w-[450px] lg:h-[300px]  bg-black/20 backdrop-blur-md">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="max-w-full max-h-full object-contain"
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

                  <div className="relative flex flex-col items-center text-center py-1">
                    <span 
                      className="absolute pointer-events-none font-black leading-none select-none z-0"
                      style={{
                        fontSize: 'clamp(120px, 25vw, 400px)',
                        bottom: 'clamp(-80px, -15vw, -150px)',
                        left: 'clamp(-350px, -25vw, -300px)',
                        color: 'transparent',
                        WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                        filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
                      }}
                    >
                      {stage.number}
                    </span>

                    <h3 className="text-3xl font-bold text-[#ffb969] relative z-10">
                      {stage.title}
                    </h3>
                    <p className="text-[16px] lg:text-[20px]  max-w-xl relative z-10 mt-1">
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

export default WorkingLaptop;