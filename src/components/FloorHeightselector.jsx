import React, { useState } from "react";
import houseTop from "../assets/images/houseTop.png";
import houseBase from "../assets/images/housebase.png";

const FloorHeightSelector = ({ setSelectedFloorHeight }) => {
  const floors = [13, 12, 11, 10];
  const [selectedFloor, setSelectedFloor] = useState(10);

  // Dynamic height mapping for each floor
  const floorHeights = {
    10: "h-12",
    11: "h-[65px]",
    12: "h-[87px]",
    13: "h-[108px]",
  };

  const handleFloorChange = (floor) => {
    setSelectedFloor(floor);
    setSelectedFloorHeight(floor);
  };

  return (
    <div className="flex flex-col items-center bg-black text-white rounded-lg relative">
      <p className="text-xs w-24 text-center mb-1.5">
        Choose the Floor height*
      </p>
      <img src={houseTop} alt="Rooftop" />

      <div className="flex flex-col items-center relative">
        {floors.map((floor) => (
          <label
            key={floor}
            className={`flex items-center justify-center w-24 ${
              floorHeights[floor]
            } border border-white cursor-pointer text-lg ${
              selectedFloor === floor
                ? "bg-gradient-to-t from-[#07565D] to-[#0FB4C3]"
                : ""
            }`}
            onClick={() => handleFloorChange(floor)}
          >
            {floor}
          </label>
        ))}
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
