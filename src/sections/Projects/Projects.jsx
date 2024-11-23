import React, { useEffect, useState } from "react";
import location from "../../assets/images/Location.png";
import sample from "../../assets/images/sample.png";

const initialImages = [
  {
    img: sample,
    name: "Image 1",
    desc: "Description for Image 1",
  },
  {
    img: sample,
    name: "Image 2",
    desc: "Description for Image 2",
  },
  {
    img: sample,
    name: "Image 3",
    desc: "Description for Image 3",
  },
  {
    img: sample,
    name: "Image 4",
    desc: "Description for Image 4",
  },
  {
    img: sample,
    name: "Image 5",
    desc: "Description for Image 5",
  },
  {
    img: sample,
    name: "Image 6",
    desc: "Description for Image 6",
  },
  {
    img: sample,
    name: "Image 7",
    desc: "Description for Image 7",
  },
  {
    img: sample,
    name: "Image 8",
    desc: "Description for Image 8",
  },
  {
    img: sample,
    name: "Image 9",
    desc: "Description for Image 9",
  },
  {
    img: sample,
    name: "Image 10",
    desc: "Description for Image 10",
  },
];

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
    <div className="flex flex-col p-5 text-white justify-center items-center h-fit 2xl:mt-44 mt-20">
      <p className="flex justify-center text-center inset-0 text-[32px] md:text-[40px] lg:text-[48px] z-10 my-10 font-giloryB">
        Projects
      </p>
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-baseline w-full">
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
                    src={imageItem.img}
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
            {images[currentIndex].desc}
          </p>
        </div>

        {/* Display selected project description and 4 images */}
        {selectedProject && (
          <div className="mt-10 w-fit text-center mx-auto">
            <p className="font-giloryM text-[16px] lg:text-[18px]">kfgsdfkgm</p>
            <div className="grid grid-cols-2 xl:grid-cols-4 justify-center gap-4 mt-6">
              {/* Display 4 images for the selected project */}
              {images
                .slice(currentIndex, currentIndex + 4)
                .map((image, index) => (
                  <div
                    key={index}
                    className="w-[172px] h-[121px] md:w-[304px] md:h-[200px] overflow-hidden rounded-2xl"
                  >
                    <img
                      src={image.img}
                      alt={image.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
