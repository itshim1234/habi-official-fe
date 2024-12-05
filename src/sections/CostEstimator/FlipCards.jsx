import React, { useState, useEffect } from "react";
import Card from "./Card";
const FlipCards = ({ scheduleData }) => {
 
  return (
    <div
      className=" text-white h-[20vh] md:h-[40vh] z-50"
    >
      <div className="relative max-w-full mx-auto ">
        {/* Center Line */}
        <div className="absolute top-1/2 left-0 border-t border-gray-600 w-[450%] md:w-[230%] lg:w-[190%] 2xl:w-[140%]"></div>

        {/* Cards */}
        <div className="relative flex justify-between items-center">
          {scheduleData.map((card, index) => (
            <div
              key={index}
              className={`absolute flex flex-col items-center rounded-l w-50 ${
                index % 2 === 0 ? "-translate-y-24" : "translate-y-24"
              }`}
              style={{
                left: `${
                  window.innerWidth < 768
                    ? 60 * index
                    : window.innerWidth < 1024
                    ? 30 * index
                    : window.innerWidth < 1290
                    ? 25 * index
                    : 20 * index
                }%`,
              }}
            >
              <Card data={scheduleData[index]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
