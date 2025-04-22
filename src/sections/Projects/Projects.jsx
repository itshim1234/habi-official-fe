import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import location from "../../assets/images/Location.webp";
import initialImages from "../../assets/projects/project";
import left from "../../assets/images/left.webp";
import right from "../../assets/images/right.webp";

const Projects = () => {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(
    parseInt(localStorage.getItem("currentIndex")) || 0 // Load from localStorage
  );
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      moveItems();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, paused]);

  useEffect(() => {
    // Save the currentIndex to localStorage whenever it changes
    localStorage.setItem("currentIndex", currentIndex);
  }, [currentIndex]);

  const moveItems = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    const clickedProject = images[index];
    setPaused(true); // Pause auto-rotation
    navigate(`/project`, {
      state: { project: clickedProject },
    });
  };

  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  const handleNavigation = (direction) => {
    const nextIndex = getCircularIndex(currentIndex + direction, images.length);
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="flex flex-col p-5 text-white justify-center items-center h-fit 2xl:h-screen">
      <p className="flex justify-center text-center inset-0 text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] z-10 mb-10 md:my-10 font-giloryB">
        Projects
      </p>
      <div className="flex flex-col w-full">
        <div className="relative flex justify-center items-baseline w-full">
          <button
            onClick={() => handleNavigation(-1)} // Navigate to the previous project
            className="absolute left-0 top-1/2 z-20 p-2 rounded-full text-white bg-white/40"
            aria-label="Previous"
          >
            <img src={left} alt="left" />
          </button>
          <button
            onClick={() => handleNavigation(1)} // Navigate to the next project
            className="absolute right-0 top-1/2 z-20 p-2 rounded-full text-white bg-white/40"
            aria-label="Next"
          >
            <img src={right} alt="Home construction Bengaluru" />
          </button>
          {Array(3)
            .fill()
            .map((_, index) => {
              const imageItem =
                images[
                  getCircularIndex(currentIndex + index - 1, images.length)
                ];
              return (
                <div
                  key={index}
                  className={`mx-3 transition-transform duration-300 cursor-pointer rounded-2xl ${
                    index === 1
                      ? "opacity-100 min-w-[350px] min-h-[250px] md:min-w-[500px] md:min-h-[350px] lg:min-w-[575px] lg:min-h-[375px] xl:min-w-[625px] xl:min-h-[375px]"
                      : "opacity-95  min-w-[315px] min-h-[210px] md:min-w-[460px] md:min-h-[310px] lg:min-w-[535px] lg:min-h-[335px] xl:min-w-[585px] xl:min-h-[335px]"
                  }`}
                  onClick={() =>
                    handleItemClick(
                      getCircularIndex(currentIndex + index - 1, images.length)
                    )
                  }
                >
                  <img
                    src={imageItem.mainImage}
                    alt="item"
                    className={` rounded-2xl ${
                      index === 1
                        ? "opacity-100 min-w-[350px] min-h-[250px] md:min-w-[500px] md:min-h-[350px] lg:min-w-[575px] lg:min-h-[375px] xl:min-w-[625px] xl:min-h-[375px]"
                        : "opacity-60 min-w-[315px] min-h-[210px] md:min-w-[460px] md:min-h-[310px] lg:min-w-[535px] lg:min-h-[335px] xl:min-w-[585px] xl:min-h-[335px]"
                    }`}
                  />
                </div>
              );
            })}
        </div>

        <div className="mx-auto mt-6 text-center justify-center items-center">
          <p className="text-[24px] md:text-[32px] font-giloryS mx-auto text-center justify-center">
            {images[currentIndex].name}
          </p>
          <p className="font-giloryM text-[16px] md:-[18px] flex mx-auto text-center justify-center mr-3">
            <img
              src={location}
              alt="Home construction Bengaluru"
              className="w-6 h-6 mr-2"
            />
            {images[currentIndex].location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

