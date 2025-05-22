import React, { useState } from "react";
import "./styles.css";

const BarGraph = ({ scheduleData, totalEstimatedCost }) => {
  console.log("BarGraph Component Rendered");
  console.log("Props - scheduleData:", scheduleData);
  console.log("Props - totalEstimatedCost:", totalEstimatedCost);

  // State to manage the hovered bar's price
  const [hoveredPrice, setHoveredPrice] = useState(null);
  console.log("Current hoveredPrice:", hoveredPrice);

  // Extract Y-axis values from scheduleData and sort them in descending order
  const yAxisValues = Array.from(
    new Set(
      scheduleData
        .slice(0, -1) // Exclude the last entry
        .map((data) => {
          console.log("Mapping price for Y-axis:", data.price);
          return data.price;
        })
    )
  ).sort((a, b) => b - a);
  console.log("Y-axis values (sorted):", yAxisValues);

  // Function to map percentage to pixel height
  const getHeightInPixels = (percentage) => {
    console.log("Calculating height for percentage:", percentage);
    if (percentage === 30) return 445;
    if (percentage === 20) return 365;
    if (percentage === 15) return 285;
    if (percentage === 10) return 205;
    if (percentage === 4) return 125;
    if (percentage === 1) return 45;
    return 0;
  };

  return (
    <div>
      <h2 className="text-center text-2xl lg:text-[32px] font-giloryB text-white mt-10">
        Payment Analytics
      </h2>
      <div className="bar-graph-wrapper rotate-90   md:rotate-0">
        <div className="chart-container">
          {/* Y-axis Labels (Hidden on Mobile) */}
          <ul className="meter">
            {yAxisValues.map((amount, index) => {
              console.log("Rendering Y-axis label:", amount);
              return (
                <li key={index} className="md:rotate-0 rotate-[-90deg]">
                  <div>₹{amount.toLocaleString("en-IN")}</div>
                </li>
              );
            })}
          </ul>
          {/* Bars */}
          {scheduleData.slice(0, -1).map((data, index) => {
            const height = getHeightInPixels(data.percentage);
            const left = `${13 * index}%`;
            console.log(`Rendering bar ${index}:`, {
              title: data.title,
              price: data.price,
              percentage: data.percentage,
              height,
              left,
            });

            return (
              <div
                key={index}
                className="bar"
                style={{
                  left,
                  height: `${height}px`,
                }}
                onMouseEnter={() => {
                  console.log(
                    "Mouse entered bar:",
                    data.title,
                    "Price:",
                    data.price
                  );
                  setHoveredPrice(data.price);
                }}
                onMouseLeave={() => {
                  console.log("Mouse left bar:", data.title);
                  setHoveredPrice(null);
                }}
              >
                {/* Tooltip to show price on hover */}
                {hoveredPrice === data.price && (
                  <div className="tooltip">
                    ₹{data.price.toLocaleString("en-IN")}
                  </div>
                )}
              </div>
            );
          })}
          {/* X-axis Labels */}
          <div className="x-axis">
            {scheduleData.slice(0, -1).map((data, index) => {
              console.log("Rendering X-axis label:", data.title);
              return (
                <div
                  key={index}
                  className="x-axis-label md:rotate-0 rotate-[-90deg]"
                >
                  {data.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;

// import React, { useState, useEffect } from "react";
// import BarGraphMobile from "./BarGraphMobile";
// import BarGraphDesktop from "./BarGraphDesktop"; // your existing version

// const BarGraph = ({ scheduleData, totalEstimatedCost }) => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return isMobile ? (
//     <BarGraphMobile
//       scheduleData={scheduleData}
//       totalEstimatedCost={totalEstimatedCost}
//     />
//   ) : (
//     <BarGraphDesktop
//       scheduleData={scheduleData}
//       totalEstimatedCost={totalEstimatedCost}
//     />
//   );
// };

// export default BarGraph;
