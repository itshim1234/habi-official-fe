import React, { useState } from "react";
import houseTop from "../assets/images/houseTop.webp";
import houseBase from "../assets/images/housebase.webp";
import dashedLine from "../assets/images/dashedLine.webp";

const FloorHeightSelector = ({ setSelectedFloorHeight }) => {
  const floors = [13, 12, 11, 10];
  const [selectedFloor, setSelectedFloor] = useState(10);

  // Dynamic height mapping for each floor
  const floorHeights = {
    10: "h-12",
    11: "h-[72px]",
    12: "h-[110px]",
    13: "h-[122px]",
  };

  const handleFloorChange = (floor) => {
    setSelectedFloor(floor);
    setSelectedFloorHeight(floor);
  };

  return (
    <div className="flex flex-col items-center bg-black text-white rounded-lg relative">
      <p className="w-28 text-center text-[#C0C0C0] font-giloryM  mb-1.5">
        Choose the Floor height*
      </p>
      <img src={houseTop} alt="Rooftop" />

      <div className="flex flex-col items-center relative">
        {floors.map((floor) => (
          <label
            key={floor}
            className={`flex items-center justify-center w-24 ${
              floorHeights[floor]
            } border-l border-r cursor-pointer text-lg ${
              selectedFloor === floor
                ? "bg-gradient-to-t from-[#07565D] to-[#0FB4C3]"
                : ""
            }`}
            onClick={() => handleFloorChange(floor)}
          >
            {floor}
          </label>
        ))}
        <div className="absolute top-[120px] w-[160%]">
          <img src={dashedLine} alt="Home construction Bengaluru" />
        </div>
        <div className="absolute top-[231px] w-[160%]">
          <img src={dashedLine} alt="Home construction Bengaluru" />
        </div>
      </div>

      <img
        src={houseBase}
        alt="House Base"
        className="absolute bottom-0 h-12 w-[157px]"
        onClick={() => handleFloorChange(10)}
      />
    </div>
  );
};

export default FloorHeightSelector;

