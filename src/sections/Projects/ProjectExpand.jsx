import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import arrow from "../../assets/images/arrowA.png";
import close from "../../assets/images/close.png";
import home from "../../assets/images/home.png";

import watch from "../../assets/images/Stopwatch.png";

import plot from "../../assets/images/Plot1.png";

const ProjectExpand = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { state } = useLocation();
  const project = state?.project;

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1); // Navigate back
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="relative inset-0 h-screen w-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.mainImage})`,
          opacity: 0.6, // Adjust opacity if needed
        }}
      ></div>

      <div className="relative z-10 flex items-center justify-center h-full px-2 lg:px-[80px] 2xl:px-[120px] md:py-4 2xl:py-20">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center h-full pt-4 px-2 md:p-2">
          <button>
            <img
              src={arrow}
              alt="back arrow"
              className="absolute md:top-0 right-4 top-2 md:left-0"
              onClick={navigateBack}
            />
          </button>
          {/* Left Section */}
          <div className="text-white lg:w-1/2 2xl:w-2/3 md:mt-10">
            <h1 className="text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] font-giloryB">
              {project.name}
            </h1>
            <p className="text-[18px] md:text-[24px] font-giloryM mb-[20px] md:mb-10">
              {project.location}
            </p>
            {/* Show location */}
            <p className="font-giloryM text-[16px] lg:text-[18px] 2xl:text-[24px] mb-[20px] lg:mb-10">
              {project.description}
            </p>
            {/* Show description */}
            <ul className="text-lg md:text-2xl space-y-2 lg:space-y-4 font-giloryS">
              <li className="flex">
                <img src={plot} alt="" className="mr-2 h-8" /> 1200 Sq. ft
              </li>
              <li className="flex">
                <img src={home} alt="" className="mr-2 h-8" /> West Facing, 3BHK
                Duplex Villa
              </li>
              <li className="flex">
                <img src={watch} alt="" className="mr-2 h-8" />
                Completed
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 2xl:w-1/3 mt-8 lg:mt-0 lg:ml-8">
            <div className="grid grid-cols-2 gap-4">
              {/* Iterate over project images */}
              {project.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-[160px] h-[110px] md:w-[370px] md:h-[200px] lg:w-[300px] lg:h-[200px] rounded-lg border cursor-pointer"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            {project.youtube && (
              <div className="mt-6">
                <iframe
                  src={project.youtube}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-40 lg:h-80 rounded-lg border"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-[80%] max-h-[500px] rounded-lg relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[100%] max-h-[500px] rounded-lg border"
            />
            <button
              onClick={() => handleImageClick(null)}
              className="absolute top-1 right-1 md:right-8 md:top-8 text-white rounded-xl bg-gray-800 focus:outline-none p-2 z-50"
            >
              <img src={close} alt="Close" className="w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectExpand;
