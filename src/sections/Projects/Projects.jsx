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
    setCurrentIndex(index);
  };

  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="flex items-end">
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
                className={`mx-2 transition-transform duration-300 cursor-pointer ${
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
                  className="max-w-[150px] max-h-[150px]"
                />
              </div>
            );
          })}
      </div>
      <div className="mt-4 text-center">
        <p className="font-bold">{images[currentIndex].name}</p>
        <p>{images[currentIndex].desc}</p>
      </div>
    </div>
  );
};

export default Projects;
