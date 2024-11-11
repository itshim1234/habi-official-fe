import React, { useState, useEffect, useRef } from "react";
import background from "../../assets/images/background2.png";
import mobileAnimation from "../../assets/videos/mobileAnimation.mp4";
const ConstructionProgress = () => {
  const [isVisible, setIsVisible] = useState(false); // Detect section visibility
  const [videoPlayed, setVideoPlayed] = useState(false); // Track video completion
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true); // Section is visible
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const handleVideoEnd = () => {
    setVideoPlayed(true); // Mark video as completed
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Centered Video */}
      <div
        ref={sectionRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <video
          ref={videoRef}
          className=" drop-shadow-lg"
          src={mobileAnimation}
          autoPlay={isVisible} // Play only when section is visible
          onEnded={handleVideoEnd}
          muted
        ></video>
      </div>
      {/* Card Section */}
      <div
        className={`relative z-10 flex flex-col sm:flex-row justify-center gap-4 px-6 mt-10 sm:mt-16 transition-opacity duration-1000 ${
          videoPlayed ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Card 1 */}
        <div className="bg-white p-4 shadow-lg rounded-lg max-w-[300px]">
          <h2 className="text-xl font-bold">Design & Documents</h2>
          <p className="text-gray-600 mt-2">
            The app makes it easy to organize and manage your designs and
            documents in one place.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-4 shadow-lg rounded-lg max-w-[300px]">
          <h2 className="text-xl font-bold">Construction on Site</h2>
          <p className="text-gray-600 mt-2">
            Track live updates and monitor construction progress in real-time.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-4 shadow-lg rounded-lg max-w-[300px]">
          <h2 className="text-xl font-bold">Track Stages</h2>
          <p className="text-gray-600 mt-2">
            Monitor each stage of construction, from foundation to completion.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-4 shadow-lg rounded-lg max-w-[300px]">
          <h2 className="text-xl font-bold">Integrated Payment</h2>
          <p className="text-gray-600 mt-2">
            Easily manage all construction payments in one app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConstructionProgress;
