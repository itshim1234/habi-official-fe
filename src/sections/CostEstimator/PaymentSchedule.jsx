import React from "react";
import divider from "../../assets/images/Line.webp";
import "./styles.css";

export const Header = () => {
  return (
    <img
      src={divider}
      alt="Home construction Bengaluru"
      className="h-[186px] md:h-[269px] lg:h-[426px]"
    />
  );
};

const PaymentSchedule = ({ scheduleData }) => {
  return (
    <div className="bg-black text-white py-10 2xl:px-[10%]">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className={`${
              index === scheduleData.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={`relative bg-[#1a1a1a] text-left p-2 lg:pb-10 md:p-6 h-[186px] md:h-[269px] lg:h-[426px] ${
                index === scheduleData.length - 1
                  ? "justify-center pl-6 md:pl-20 items-center md:flex gap-x-10 pt-12 md:pt-0 glowing-effect"
                  : "justify-between pl-6 md:pl-10 flex flex-col  bg-[#1a1a1a]"
              }`}
            >
              <p className="text-lg md:text-2xl lg:text-[40px] font-giloryM  leading-[1.1] md:leading-[1.3] lg:leading-[1.3] md:inline">
                {item.title}
              </p>

              <div className="absolute top-1/2 md:left-10">
                <span
                  className={`text-2xl md:text-[32px] lg:text-[56px] text-stroke font-larken ${
                    index === scheduleData.length - 1 ? "hidden" : "flex"
                  }`}
                >
                  {item.percentage}%
                </span>
              </div>
              <div className="text-2xl md:text-[32px] lg:text-[56px] font-giloryB md:inline">
                ₹ {Number(item.price).toLocaleString("en-IN")}
              </div>
              {index === scheduleData.length - 1 && (
                <p
                  className={`absolute text-right font-giloryM italic text-[10px] md:text-[12px] lg:text-lg bottom-[2%] right-[2%] text-[#7c7c7c]`}
                >
                  * Actual cost may vary based on design and selection of
                  materials.
                </p>
              )}

              {/* Dividers */}
              {(index === 0 ||
                index === 1 ||
                index === 3 ||
                index === 4 ||
                index === 6) && (
                <div className="hidden md:flex absolute top-0 right-0 z-10">
                  <Header />
                </div>
              )}
              {(index === 0 || index === 2 || index === 4 || index === 6) && (
                <div className="absolute md:hidden top-0 right-0 z-20">
                  <Header />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSchedule;

