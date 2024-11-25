import React, { useEffect, useState } from "react";
import location from "../../assets/images/Location.png";
import initialImages from "../../assets/projects/project";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
const Projects = () => {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      moveItems();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, paused]);

  const moveItems = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    const clickedProject = images[index];

    // Toggle selection and pause/resume movement
    if (selectedProject && selectedProject.name === clickedProject.name) {
      setPaused(!paused); // Resume if already paused
    } else {
      setPaused(true); // Pause when selecting a new item
    }

    setSelectedProject(
      selectedProject && selectedProject.name === clickedProject.name
        ? null
        : clickedProject
    );
    setCurrentIndex(index);
  };

  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  return (
    <div className="flex flex-col p-5 text-white justify-center items-center h-fit">
      <p className="flex justify-center text-center inset-0 text-[32px] md:text-[40px] lg:text-[48px] z-10 my-10 font-giloryB">
        Projects
      </p>
      <div className="flex flex-col w-full">
        <div className="relative flex justify-center items-baseline w-full">
          <button
            onClick={() =>
              setCurrentIndex(getCircularIndex(currentIndex - 1, images.length))
            }
            className="absolute left-0 top-1/2 z-20 p-2 rounded-full text-white bg-white/40"
            aria-label="Previous"
          >
            <img src={left} alt="left" />
          </button>
          <button
            onClick={() =>
              setCurrentIndex(getCircularIndex(currentIndex + 1, images.length))
            }
            className="absolute right-0 top-1/2 z-20 p-2 rounded-full text-white bg-white/40"
            aria-label="Next"
          >
            <img src={right} alt="" />
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

        <div className="mx-auto mt-6 text-center">
          <p className="text-[24px] md:text-[32px] font-giloryS">
            {images[currentIndex].name}
          </p>
          <p className="font-giloryM text-[16px] md:-[18px] flex">
            <img src={location} alt="" className="w-6 h-6 mr-2" />
            {images[currentIndex].location}
          </p>
        </div>

        {/* Display selected project description and 4 images */}
        {selectedProject && (
          <div className="mt-10 w-full text-center mx-auto">
            <p className="font-giloryM text-[16px] lg:text-[18px] px-2 md:px-4 lg:px-24">
              {selectedProject.description}
            </p>
            <div className="flex justify-center mt-6">
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                {/* Display 4 images for the selected project */}
                {selectedProject.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-[172px] h-[121px] md:w-[304px] md:h-[200px] overflow-hidden rounded-2xl"
                  >
                    <img
                      src={image}
                      alt="related images"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
