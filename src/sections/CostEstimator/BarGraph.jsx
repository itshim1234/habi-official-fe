import React, { useState } from "react";
import "./styles.css";

const BarGraph = ({ scheduleData, totalEstimatedCost }) => {
  // State to manage the hovered bar's price
  const [hoveredPrice, setHoveredPrice] = useState(null);

  // Extract Y-axis values from scheduleData and sort them in descending order
  const yAxisValues = Array.from(
    new Set(
      scheduleData
        .slice(0, -1) // Exclude the last entry
        .map((data) => data.price) // Extract prices
    )
  ).sort((a, b) => b - a); // Sort in descending order

  // Function to map percentage to pixel height
  const getHeightInPixels = (percentage) => {
    if (percentage === 30) return 445; // 30% → 445px
    if (percentage === 20) return 365; // 20% → 365px
    if (percentage === 15) return 285; // 15% → 285px
    if (percentage === 10) return 205; // 10% → 205px
    if (percentage === 4) return 125; // 4% → 125px
    if (percentage === 1) return 45; // 1% → 45px
    return 0; // Default height for other cases
  };

  return (
    <div>
      <h2 className="text-center text-2xl lg:text-[32px] font-giloryB text-white mt-10">
        Payment Analytics
      </h2>
      <div className="bar-graph-wrapper rotate-90 md:rotate-0">
        <div className="chart-container">
          {/* Y-axis Labels (Hidden on Mobile) */}
          <ul className="meter">
            {yAxisValues.map((amount, index) => (
              <li key={index}>
                <div>₹{amount.toLocaleString("en-IN")}</div>
              </li>
            ))}
          </ul>
          {/* Bars */}
          {scheduleData.slice(0, -1).map((data, index) => (
            <div
              key={index}
              className="bar"
              style={{
                left: `${13 * index}%`,
                height: `${getHeightInPixels(data.percentage)}px`,
              }}
              onMouseEnter={() => setHoveredPrice(data.price)} // Set hovered price
              onMouseLeave={() => setHoveredPrice(null)} // Clear hovered price
            >
              {/* Tooltip to show price on hover */}
              {hoveredPrice === data.price && (
                <div className="tooltip">
                  ₹{data.price.toLocaleString("en-IN")}
                </div>
              )}
            </div>
          ))}
          {/* X-axis Labels */}
          <div className="x-axis">
            {scheduleData.slice(0, -1).map((data, index) => (
              <div key={index} className="x-axis-label">
                {data.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
