import React, { useState } from "react";
import houseTop from "../assets/images/houseTop.png";
import houseBase from "../assets/images/housebase.png";

const FloorSelector = ({ setSelectedFloor }) => {
  const floors = ["Fifth", "Fourth", "Third", "Second", "First", "Ground"];
  const floorNumbers = {
    Ground: 1,
    First: 2,
    Second: 3,
    Third: 4,
    Fourth: 5,
    Fifth: 6,
  };

  const [selectedFloors, setSelectedFloors] = useState(["Ground"]);
  const [rooftopSelected, setRooftopSelected] = useState(false);

  const handleFloorClick = (floorIndex) => {
    const newSelectedFloors = floors.slice(floorIndex);
    setSelectedFloors(newSelectedFloors);

    const maxFloor = floorNumbers[newSelectedFloors[0]]; // Get highest floor number
    console.log("Max selected floor:", maxFloor);
    setSelectedFloor(maxFloor);
  };

  return (
    <div className="flex flex-col items-center bg-black text-white relative">
      <p className="w-20 text-center text-xs mb-1.5">
        Choose the No. of Floors*
      </p>

      {/* Rooftop - Independent Selection */}
      <img src={houseTop} alt="Rooftop" />
      <label
        className={`flex items-center justify-center w-24 h-11 border border-t-0 border-white cursor-pointer ${
          rooftopSelected ? "bg-gradient-to-t from-[#07565D] to-[#0FB4C3]" : ""
        }`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={rooftopSelected}
          onChange={() => setRooftopSelected(!rooftopSelected)}
        />
        Rooftop
      </label>

      {/* Floors (Descending Order) */}
      {floors.map((floor, index) => (
        <label
          key={floor}
          className={`flex items-center justify-center w-24 h-11 border border-white cursor-pointer ${
            selectedFloors.includes(floor)
              ? "bg-gradient-to-t from-[#07565D] to-[#0FB4C3]"
              : ""
          }`}
          onClick={() => handleFloorClick(index)}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={selectedFloors.includes(floor)}
            readOnly
          />
          {floor}
        </label>
      ))}

      <img
        src={houseBase}
        alt="House Base"
        className="absolute -bottom-0 h-12 w-[157px]"
        onClick={() => handleFloorClick(5)}
      />
    </div>
  );
};

export default FloorSelector;
