import React from "react";

const PaymentSchedule = ({ scheduleData }) => {
  return (
    <div className="mx-auto text-white px-2 md:px-0">
      <h1 className="text-center text-2xl font-giloryB">Payment Schedules</h1>
      <div className="border border-[#7c7c7c] mt-4 rounded-xl">
        {scheduleData.map((schedule, index) => (
          <div key={index} className="flex border-b border-[#7c7c7c]">
            <div className="w-2/4 md:w-3/5  p-4 border-r border-[#7c7c7c]">
              <h2 className="font-giloryB text-white text-[18px] text-left">
                {schedule.title}
              </h2>
              <ul className="list-disc list-inside text-left font-giloryM">
                {schedule.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="w-1/6 md:w-1/5 p-4 border-r border-[#7c7c7c] flex items-center justify-center">
              <span className="text-lg font-bold">{schedule.percentage}%</span>
            </div>
            <div className="w-1/5 md:w-1/4 mx-auto md:justify-center flex items-center">
              <span className="text-lg font-bold">
                ₹{schedule.price.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
        <div className="flex font-giloryB text-2xl">
          <div className="w-3/4 p-4 border-t border-[#7c7c7c] text-left">
            TOTAL
          </div>
          <div className="w-1/4 p-4 border-t border-[#7c7c7c] ">
            ₹
            {scheduleData
              .reduce((acc, schedule) => acc + schedule.price, 0)
              .toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSchedule;
