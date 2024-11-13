import React, { useState, useEffect } from "react";
import "./styles.css";

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
    image: "/images/testimonial1.jpg",
    userImage: "/images/user1.jpg",
  },
  {
    id: 2,
    name: "Sandeep ",
    content:
      "Habi not only brought our dream home to life but exceeded expectations...",
    location: "Jayanagar, Bengaluru",
    size: "1200 Sq. ft",
    price: "1.3 Cr",
    feedback: "Highly recommended for top-tier design on a budget.",
    image: "/images/testimonial1.jpg",
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
    feedback: "Highly recomign on a budget.",
    image: "/images/testimonial1.jpg",
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
    image: "/images/testimonial1.jpg",
    userImage: "/images/user1.jpg",
  },
  {
    id: 5,
    name: "ar",
    content:
      "Habi not only brought our dream home to life but exceeded expectations...",
    location: "Jayanagar, Bengaluru",
    size: "1200 Sq. ft",
    price: "1.3 Cr",
    feedback: "Highly recommended for top-tier design on a budget.",
    image: "/images/testimonial1.jpg",
    userImage: "/images/user1.jpg",
  },
  {
    id: 6,
    name: "Sandeep Kumar",
    content:
      "Habi not only brought our dream home to life but exceeded expectations...",
    location: "Jayanagar, Bengaluru",
    size: "1200 Sq. ft",
    price: "1.3 Cr",
    feedback: "Highly recommended for top-tier design on a budget.",
    image: "/images/testimonial1.jpg",
    userImage: "/images/user1.jpg",
  },
  // Add all 10 testimonials here
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate the three testimonials to display in the current iteration
  const visibleTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
    testimonials[(activeIndex + 2) % testimonials.length],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-carousel">
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
      <div className="testimonial-carousel-container">
        <div className="carousel-wrapper">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`carousel-item ${index === 0 ? "active" : "small"}`}
            >
              <img src={testimonial.image} alt="Testimonial" />
              <p className="feedback">"{testimonial.feedback}"</p>
              <img
                className="user-image"
                src={testimonial.userImage}
                alt="User"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
