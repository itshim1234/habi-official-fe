import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import arrow from "../../assets/images/ArrowRight.png";

const ProjectExpand = () => {
  const { state } = useLocation();
  const project = state?.project;

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1); // Navigate back
  };

  return (
    <div className="relative inset-0 flex items-center justify-center h-screen w-screen">
      {/* Background Image */}
      <button>
        <img
          src={arrow}
          alt="back arrow"
          className="rotate-180 absolute top-0"
          onClick={navigateBack}
        />
      </button>
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${project.mainImage})` }} // Set background from mainImage
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center h-full p-6 bg-black bg-opacity-50">
          {/* Left Section */}
          <div className="text-white lg:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">{project.name}</h1>
            <p className="text-lg">{project.location}</p> {/* Show location */}
            <p className="text-sm">{project.description}</p>
            {/* Show description */}
            <ul className="text-sm space-y-2">
              <li>📐 1200 Sq. ft</li>
              <li>🏠 West Facing, 3BHK Duplex Villa</li>
              <li>✅ Completed</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
            <div className="grid grid-cols-2 gap-4 ">
              {/* Iterate over project images */}
              {project.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-[160px] h-[110px] md:w-[370px] md:h-[200px] lg:w-[300px] lg:h-[200px] rounded-lg border"
                />
              ))}
            </div>
            <div className="mt-6">
              <iframe
                src="https://www.youtube.com/embed/BWbawFAjlb4?si=E_wbL4H1kIDR9Be4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-40 lg:h-80 rounded-lg border"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectExpand;
