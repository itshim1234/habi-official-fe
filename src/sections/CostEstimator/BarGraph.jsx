import React from "react";
import "./styles.css";

const BarGraph = ({ scheduleData, totalEstimatedCost }) => {
  return (
    <div>
      <h2 className="text-center text-2xl lg:text-[32px] font-giloryB text-white mt-10">
        Payment Analytics
      </h2>
      <div className="bar-graph-wrapper">
        <div className="chart-container ">
          {/* Y-axis Labels */}
          <ul className="meter">
            {[5000000, 4000000, 3000000, 2000000, 1000000].map(
              (amount, index) => (
                <li key={index}>
                  <div>₹{amount.toLocaleString("en-IN")}</div>
                </li>
              )
            )}
          </ul>
          {/* Background Grid */}
          <table>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i}>
                  {[...Array(scheduleData.length)].map((_, j) => (
                    <td key={j}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {/* Bars */}
          {scheduleData.slice(0, -1).map((data, index) => (
            <div
              key={index}
              className={`bar bar-${index}`}
              style={{
                left: `${13 * index}%`,
                height: `${data.price / 100000}%`,
              }}
            ></div>
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
