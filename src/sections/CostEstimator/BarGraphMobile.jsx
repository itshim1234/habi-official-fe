import React from "react";
import "./styles.css"; // Optional: if separating styles

const BarGraphMobile = ({ scheduleData }) => {
  const maxPrice = Math.max(...scheduleData.map((d) => d.price));

  return (
    <div className="bar-chart-container">
      <h2 className="text-center text-2xl font-giloryB text-white mb-6">
        Payment Analytics
      </h2>

      <div className="bar-chart-grid">
        {scheduleData.map((data, index) => {
          const barWidthPx = (data.price / maxPrice) * 250 + 60; // Optional: scale bar width (tweak values)
          return (
            <div className="bar-chart-row" key={index}>
              <div className="bar-chart-label">{data.title}</div>
              <div className="bar-wrapper">
                <div className="bar" style={{ width: `${barWidthPx}px` }}>
                  ₹{data.price.toLocaleString("en-IN")}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarGraphMobile;
