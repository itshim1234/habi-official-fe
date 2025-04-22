import React, { useState, useEffect } from "react";

import cost from "../../assets/images/Cost.webp";
import left from "../../assets/images/left.webp";
import right from "../../assets/images/right.webp";
import plot from "../../assets/images/Plot.webp";
import play from "../../assets/images/Playicon.webp";
import location from "../../assets/images/projectLocation.webp";
import "./styles.css";

import testimonials from "../../assets/testimonials/testimonial";

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null); // For storing video URL
  const [isModalOpen, setIsModalOpen] = useState(false); // For opening/closing modal

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate visible testimonials
  const visibleTestimonials = isMobile
    ? [testimonials[activeIndex]]
    : [
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % testimonials.length],
        testimonials[(activeIndex + 2) % testimonials.length],
      ];

  // Auto-slide testimonials every 10 seconds
  useEffect(() => {
    if (isModalOpen) return; // Skip interval setup if modal is open

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval
  }, [isModalOpen, testimonials.length]);

  // Handle manual navigation
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Handle click on active testimonial to open video
  // Handle click on a testimonial to open video and set active index
  const handleClick = (testimonial, index) => {
    if (testimonial.videoUrl) {
      setActiveIndex(index); // Update active index to match clicked testimonial
      setVideoUrl(testimonial.videoUrl); // Set video URL from the testimonial
      setIsModalOpen(true); // Open modal
    }
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl(null); // Clear video URL when closing
  };

  return (
    <div className="w-full text-white mb-10 md:mb-0 relative 2xl:mb-20">
      <p className="flex justify-center text-center inset-0 text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] z-10 mt-10 mb-10 md:mb-0 font-giloryB">
        Testimonials
      </p>
      <div className="flex flex-col md:flex-row-reverse">
        <div className="w-full md:w-[45%] lg:w-[65%] xl:w-[64%] 2xl:w-[59%] h-[380px] md:h-[500px] md:pl-4 items-center md:flex">
          <div className="relative flex md:space-x-5 justify-center items-center">
            {visibleTestimonials.map((testimonial, index) => {
              let className = "relative carousel-item";
              if (index === 0) {
                className += " active"; // Left large
              } else if (index === 1) {
                className += " middle"; // Middle medium
              } else if (index === 2) {
                className += " small"; // Right small
              }

              return (
                <div
                  key={testimonial.id}
                  className={className}
                  onClick={() =>
                    handleClick(
                      testimonial,
                      (activeIndex + index) % visibleTestimonials.length
                    )
                  } // Pass index relative to activeIndex
                >
                  <img
                    className="absolute w-full h-full object-cover rounded-2xl"
                    src={testimonial.image}
                    alt="Testimonial"
                  />
                  <div className="content z-10 absolute bottom-0 bg-black/40 backdrop-blur-lg rounded-b-xl px-3 flex items-end pb-8 justify-center border border-[#7c7c7c] gil">
                    <p className="text-left">{testimonial.feedback}</p>
                  </div>

                  <img
                    src={testimonial.userImage}
                    alt="Home construction Bengaluru"
                    className="image absolute right-3 border-2 rounded-full z-20"
                  />
                  <img
                    src={play}
                    alt="Home construction Bengaluru"
                    className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-50 w-6 h-6"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-[55%] lg:w-[40%] flex flex-col justify-center px-6 items-center md:items-start text-center md:text-left">
          <p className="font-giloryS text-2xl lg:text-[32px] mt-14 md:mt-0">
            {visibleTestimonials[0].name}
          </p>
          <p className="font-giloryM lg:text-lg 2xl:text-xl mt-6">
            {visibleTestimonials[0].content}
          </p>
          <p className="flex mb-2 text-lg font-giloryS mt-6">
            <img
              src={location}
              alt="Home construction Bengaluru"
              className="w-6 h-6 mr-2"
            />
            {visibleTestimonials[0].location}
          </p>
          <p className="flex mb-2 text-lg font-giloryS">
            <img
              src={plot}
              alt="Home construction Bengaluru"
              className="w-6 h-6 mr-2"
            />
            {visibleTestimonials[0].size}
          </p>
          <p className="flex text-lg font-giloryS">
            <img
              src={cost}
              alt="Home construction Bengaluru"
              className="w-6 h-6 mr-2"
            />
            {visibleTestimonials[0].price}
          </p>
        </div>
      </div>
      <div className="flex gap-6 mx-auto justify-center items-center space-x-4 md:mt-0 mb-10">
        <button
          onClick={handlePrev}
          className="absolute md:relative left-1 top-1/3 transform -translate-y-1/2 z-20 p-2 rounded-full text-white bg-white/40"
        >
          <img src={left} alt="◀" />
        </button>
        <button
          onClick={handleNext}
          className="absolute md:relative right-1 top-1/3 transform -translate-y-1/2 z-20 p-2 rounded-full text-white bg-white/40"
        >
          <img src={right} alt="◀" />
        </button>
      </div>

      {/* Modal for YouTube video */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
          onClick={closeModal}
        ></div>
      )}

      {/* Sliding Drawer for Assign Task */}
      <div
        className={`absolute top-32 md:top-20 right-0 w-full md:w-2/4 lg:w-[40%] xl:w-[63%] 2xl:w-[60%] h-[40vh] md:h-[30vh] lg:h-[90vh] 2xl:h-[60vh] bg-layoutColor shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Testimonial;

