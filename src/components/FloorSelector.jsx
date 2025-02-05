import React, { useState } from "react";

const FloorSelector = () => {
  const floors = ["Fifth", "Fourth", "Third", "Second", "First", "Ground"];
  const [selectedFloors, setSelectedFloors] = useState(["Ground"]);
  const [isRooftopSelected, setIsRooftopSelected] = useState(false);

  const handleCheckboxChange = (floor) => {
    if (floor === "Rooftop") {
      setIsRooftopSelected((prev) => !prev); // Toggle Rooftop selection
    } else {
      setSelectedFloors(
        (prev) =>
          prev.includes(floor)
            ? prev.filter((f) => f !== floor) // Deselect if already selected
            : [...prev, floor] // Select if not already selected
      );
    }
  };

  // Filter out 'Rooftop' to determine the highest selected floor
  const nonRooftopFloors = selectedFloors.filter((f) => f !== "Rooftop");

  // Find the highest non-rooftop floor from the selected floors
  const maxNonRooftopSelectedFloor = nonRooftopFloors.length
    ? nonRooftopFloors[nonRooftopFloors.length - 1]
    : "None";

  // If 'Rooftop' is selected, it is the highest floor
  const adjustedMaxSelectedFloor = isRooftopSelected
    ? "Rooftop"
    : maxNonRooftopSelectedFloor;

  return (
    <div className="flex flex-col items-center bg-black text-white p-4 rounded-lg">
      {floors.map((floor) => (
        <label
          key={floor}
          className={`flex items-center justify-center w-40 h-12 border border-white my-1 rounded-md ${
            selectedFloors.includes(floor) ? "bg-cyan-600" : "bg-black"
          }`}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={selectedFloors.includes(floor)}
            onChange={() => handleCheckboxChange(floor)}
          />
          {floor}
        </label>
      ))}
      <label
        key="Rooftop"
        className={`flex items-center justify-center w-40 h-12 border border-white my-1 rounded-md ${
          isRooftopSelected ? "bg-cyan-600" : "bg-black"
        }`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={isRooftopSelected}
          onChange={() => handleCheckboxChange("Rooftop")}
        />
        Rooftop
      </label>
      <p className="text-white mt-4">
        Max Selected Floor: {adjustedMaxSelectedFloor}
      </p>
      <p className="text-white">
        Rooftop Selected: {isRooftopSelected ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default FloorSelector;
