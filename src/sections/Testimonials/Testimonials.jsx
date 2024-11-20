import React, { useState, useEffect } from "react";
import "./styles.css";
import a from "../../assets/images/a.png";

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
    userImage: "/images/user1.jpg",
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
    userImage: "/images/user1.jpg",
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
    userImage: "/images/user1.jpg",
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
    userImage: "/images/user1.jpg",
  },
];

const Testimonial = () => {
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
    <div className="text-white h-fit">
      <hr className="bg-[#ffffff] p-0 m-0" />
      <p className="flex justify-center text-center inset-0 text-[32px] md:text-[40px] lg:text-[48px] z-10 mt-20">
        Testimonials
      </p>
      <div className="testimonial-carousel md:px-20 lg:px-40 2xl:px-[15%] pt-10 pb-20">
        {/* Left Section - Active Testimonial */}
        <div className="testimonial-content">
          <h2>{visibleTestimonials[0].name}</h2>
          <p>{visibleTestimonials[0].content}</p>
          <div className="testimonial-details">
            <span>{visibleTestimonials[0].location}</span>
            <span>{visibleTestimonials[0].size}</span>
            <span>{visibleTestimonials[0].price}</span>
          </div>
        </div>

        {/* Right Section - Carousel with three testimonials */}
        <div className="testimonial-carousel-container relative">
          <div className="carousel-wrapper flex gap-4 justify-center items-center">
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
                  <img src={testimonial.image} alt="Testimonial" />
                  <p className="feedback">"{index}"</p>
                  <img
                    className="user-image"
                    src={testimonial.userImage}
                    alt="User"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex gap-6 mx-auto justify-center items-center">
        <button
          onClick={handlePrev}
          className="left-0 top-1/2 transform -translate-y-1/2 text-white p-2"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="right-0 top-1/2 transform -translate-y-1/2  text-white p-2 "
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
