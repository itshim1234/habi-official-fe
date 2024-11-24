import React, { useState, useEffect } from "react";
import a from "../../assets/images/a.png";
import b from "../../assets/images/b.png";

import cost from "../../assets/images/Cost.png";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import plot from "../../assets/images/Plot.png";
import location from "../../assets/images/projectLocation.png";
import "./styles.css";
import naveen from "../../assets/images/navven.png";
const testimonials = [
  {
    id: 1,
    name: "Sandeep Kumar",
    content:
      "Habi not only brought our dream home to life but exceeded expectations...",
    location: "Jayanagar, Bengaluru",
    size: "1200 Sq. ft",
    price: "1.3 Cr",
    feedback: "Highly recommended for top-tier design on a budget.",
    image: a,
    userImage: naveen,
  },
  {
    id: 2,
    name: "Sandeep",
    content:
      "Habi not only brought our dream home to life but exceeded expectations...",
    location: "Jayanagar, Bengaluru",
    size: "1200 Sq. ft",
    price: "1.3 Cr",
    feedback: "Highly recommended for top-tier design on a budget.",
    image: b,
    userImage: naveen,
  },
  {
    id: 3,
    name: "Sumar",
    content:
      "Habi not only brought our dream home to life but exceeded expectations...",
    location: "Jayanagar, Bengaluru",
    size: "1200 Sq. ft",
    price: "1.3 Cr",
    feedback: "Highly recommended on a budget.",
    image: a,
    userImage: naveen,
  },
  {
    id: 4,
    name: "Sandumar",
    content:
      "Habi not only brought our dream home to life but exceeded expectations...",
    location: "Jayanagar, Bengaluru",
    size: "1200 Sq. ft",
    price: "1.3 Cr",
    feedback: "Highly recommendeddget.",
    image: b,
    userImage: naveen,
  },
];

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
    }, 1000);

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

  return (
    <div className="w-full text-white mb-10 md:mb-0">
      <p className="flex justify-center text-center inset-0 text-[32px] md:text-[40px] lg:text-[48px] z-10 mt-10 mb-10 md:mb-0 font-giloryB">
        Testimonials
      </p>
      <div className="flex flex-col md:flex-row-reverse">
        <div className="w-full md:w-[65%] lg:w-[63%] xl:w-[57%] h-[380px] md:h-[500px] pl-4 items-center md:flex">
          <div className="relative flex md:space-x-5 justify-center items-center">
            {visibleTestimonials.map((testimonial, index) => {
              let className = "carousel-item";
              if (index === 0) {
                className += " active"; // Left large
              } else if (index === 1) {
                className += " middle"; // Middle medium
              } else if (index === 2) {
                className += " small"; // Right small
              }

              return (
                <div key={testimonial.id} className={className}>
                  <img
                    className="absolute"
                    src={testimonial.image}
                    alt="Testimonial"
                  />
                  <div className="content z-10 absolute -bottom-[9%] bg-black/40 backdrop-blur-lg rounded-b-3xl px-3 flex items-end pb-5 justify-center border border-[#7c7c7c]">
                    <p className="text-left">{testimonial.content}</p>
                  </div>
                  <div className="blur absolute right-3 border-t rounded-full p-2 bg-black/40 backdrop-blur-lg z-0">
                    <img src={naveen} alt="" />
                  </div>
                  <img
                    src={naveen}
                    alt=""
                    className="image absolute right-3 border-t rounded-full p-2 z-20"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-[35%] lg:w-[40%] flex flex-col justify-center px-6 items-center md:items-start text-center md:text-left">
          <p className="font-giloryS text-2xl lg:text-3xl">
            {visibleTestimonials[0].name}
          </p>
          <p className="font-giloryM lg:text-lg mt-6">
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
    </div>
  );
}

export default Testimonial;
