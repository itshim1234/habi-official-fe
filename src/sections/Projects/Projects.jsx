import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    location: "Location 1",
    imageUrl: "url_to_image_1",
  },
  {
    id: 2,
    title: "Darshan Residency",
    location: "Pattanagere, Bengaluru",
    imageUrl: "url_to_image_2",
  },
  {
    id: 3,
    title: "Project 3",
    location: "Location 3",
    imageUrl: "url_to_image_3",
  },
  {
    id: 4,
    title: "Project 4",
    location: "Location 3",
    imageUrl: "url_to_image_3",
  },
];

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Initial slide index
  const [autoplay, setAutoplay] = useState(true); // Autoplay state toggle

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust for desired number of testimonials visible
    slidesToScroll: 1,
    autoplay: autoplay, // Enable autoplay based on state
    autoplaySpeed: 2000, // Adjust autoplay speed (milliseconds)
    arrows: false, // Hide arrows if preferred
    afterChange: (index) => setCurrentSlide(index % projects.length),
  };

  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % projects.length);
      }, settings.autoplaySpeed);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [autoplay, settings.autoplaySpeed]);

  const handleAutoplayToggle = () => {
    setAutoplay(!autoplay);
  };

  return (
    <div className="bg-black text-white py-10 px-10">
      <h2 className="text-center text-3xl font-bold mb-8">Projects</h2>

      <div className="slider-controls">
        <button onClick={handleAutoplayToggle}>
          {autoplay ? "Pause Autoplay" : "Start Autoplay"}
        </button>
      </div>

      <Slider {...settings}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`px-4 transition-transform duration-500 ${
              index === currentSlide + 1 ? "scale-110" : "scale-90 opacity-75"
            }`}
          >
            <div className="bg-gray-900 rounded-lg shadow-lg transform transition-all duration-300">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-gray-900 text-center">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400 flex items-center justify-center">
                  <span className="material-icons text-base mr-1">place</span>
                  {project.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;
