import React, { useEffect, useState } from "react";

const initialImages = [
  {
    img: "https://via.placeholder.com/600/92c952",
    name: "Image 1",
    desc: "Description for Image 1",
  },
  {
    img: "https://via.placeholder.com/600/771796",
    name: "Image 2",
    desc: "Description for Image 2",
  },
  {
    img: "https://via.placeholder.com/600/24f355",
    name: "Image 3",
    desc: "Description for Image 3",
  },
  {
    img: "https://via.placeholder.com/600/ff69b4",
    name: "Image 4",
    desc: "Description for Image 4",
  },
  {
    img: "https://via.placeholder.com/600/ffa500",
    name: "Image 5",
    desc: "Description for Image 5",
  },
  {
    img: "https://via.placeholder.com/600/8db6cd",
    name: "Image 6",
    desc: "Description for Image 6",
  },
  {
    img: "https://via.placeholder.com/600/5d47a7",
    name: "Image 7",
    desc: "Description for Image 7",
  },
  {
    img: "https://via.placeholder.com/600/b0f7cc",
    name: "Image 8",
    desc: "Description for Image 8",
  },
  {
    img: "https://via.placeholder.com/600/7f78e0",
    name: "Image 9",
    desc: "Description for Image 9",
  },
  {
    img: "https://via.placeholder.com/600/77e0cc",
    name: "Image 10",
    desc: "Description for Image 10",
  },
];

const Projects = () => {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      moveItems();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveItems = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    const clickedProject = images[index];
    // Toggle selection
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
    <div className="flex flex-col items-center justify-center p-5">
      <p className="">Projects</p>
      <div className="flex flex-col items-center w-full">
        <div className="flex items-end justify-center w-full">
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
                  className={`mx-3 transition-transform duration-300 cursor-pointer min-w-[350px] md:w-[500px] min-h-[250px] md:h-[350px] ${
                    index === 1
                      ? "transform scale-130 opacity-100 my-8"
                      : "opacity-70"
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
                    className="w-[350px] md:w-[500px] h-[250px] md:h-[350px] object-cover object-center"
                  />
                </div>
              );
            })}
        </div>

        {/* Display selected project description and 4 images */}
        {selectedProject && (
          <div className="mt-8 w-fit text-center">
            <h2 className="text-3xl font-bold">{selectedProject.name}</h2>
            <p className="mt-2">{selectedProject.desc}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-4 mt-6">
              {/* Display 4 images for the selected project */}
              {images
                .slice(currentIndex, currentIndex + 4)
                .map((image, index) => (
                  <div key={index} className="w-60 h-60 overflow-hidden">
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
