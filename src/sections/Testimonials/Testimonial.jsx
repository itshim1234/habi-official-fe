import React, { useState, useEffect } from "react";

import cost from "../../assets/images/Cost.png";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import plot from "../../assets/images/Plot.png";
import play from "../../assets/images/Playicon.png";
import location from "../../assets/images/projectLocation.png";
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
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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
  const handleClick = (testimonial) => {
    if (testimonial.videoUrl) {
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
                  onClick={() => handleClick(testimonial)} // Handle click on carousel item
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
                    alt=""
                    className="image absolute right-3 border-2 rounded-full z-20"
                  />
                  <img
                    src={play}
                    alt=""
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
            <img src={location} alt="" className="w-6 h-6 mr-2" />
            {visibleTestimonials[0].location}
          </p>
          <p className="flex mb-2 text-lg font-giloryS">
            <img src={plot} alt="" className="w-6 h-6 mr-2" />
            {visibleTestimonials[0].size}
          </p>
          <p className="flex text-lg font-giloryS">
            <img src={cost} alt="" className="w-6 h-6 mr-2" />
            {visibleTestimonials[0].price}
          </p>
        </div>
      </div>
      <div className="flex gap-6 mx-auto justify-center items-center mt-10 md:mt-0">
        <button
          onClick={handlePrev}
          className="left-0 top-1/2 transform -translate-y-1/2 text-white p-2"
        >
          <img src={left} alt="◀" />
        </button>
        <button
          onClick={handleNext}
          className="right-0 top-1/2 transform -translate-y-1/2  text-white p-2 "
        >
          <img src={right} alt="◀" />
        </button>
      </div>

      {/* Modal for YouTube video */}
      {isModalOpen && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] h-[30%] md:h-full bg-black/50 flex justify-center items-center z-20">
          <button
            className="absolute top-2 right-2 p-2 text-black bg-white"
            onClick={closeModal}
          >
            ✖
          </button>
          <div className="modal-container rounded-lg w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonial;
