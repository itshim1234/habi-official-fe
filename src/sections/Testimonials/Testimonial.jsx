import React, { useState, useEffect } from "react";
import a from "../../assets/images/a.png";
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
    image: a,
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
    image: a,
    userImage: naveen,
  },
];

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate visible testimonials
  const visibleTestimonials = [
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

  return (
    <div className="w-full text-white">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="bg-red-300 w-full md:w-[60%] h-[500px] pl-4 items-center flex ">
          <div className="relative flex space-x-5 justify-center items-center">
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
        <div className="bg-blue-300 w-full md:w-[40%] flex flex-col justify-center px-6 items-center md:items-start text-center md:text-left">
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
    </div>
  );
}

export default Testimonial;
