import React, { useState, useEffect, useRef } from "react";

function Working() {
  const [animationProgress, setAnimationProgress] = useState(0);
  const thirdSectionRef = useRef(null);

  // Function to handle scroll events
  const handleScroll = () => {
    if (!thirdSectionRef.current) return;

    const sectionTop = thirdSectionRef.current.getBoundingClientRect().top;
    const sectionHeight = thirdSectionRef.current.offsetHeight;

    // Check if the section is in the viewport
    if (sectionTop <= window.innerHeight && sectionTop + sectionHeight >= 0) {
      const scrollProgress = Math.min(
        (window.scrollY - thirdSectionRef.current.offsetTop) / sectionHeight,
        1
      );
      setAnimationProgress(scrollProgress);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center text-center bg-black text-white relative h-screen">
      {/* Background iframe */}
      <iframe
        src="https://my.spline.design/gitnesssplinetest-73744034a060a8a69a38b8355df2a261/"
        width="100%"
        height="100%"
        className="absolute"
      ></iframe>
      
      {/* Content on top */}
      <div
        ref={thirdSectionRef}
        className="relative z-10"
        style={{
          transform: `translateY(${animationProgress * 200}px)`, // Example animation based on scroll progress
          transition: "transform 0.1s ease-out",
        }}
      >
        <h1>Your Content Here</h1>
        <p>This content will stay above the animated background as you scroll.</p>
      </div>
    </div>
  );
}

export default Working;
