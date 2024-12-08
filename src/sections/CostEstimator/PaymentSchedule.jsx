import React from "react";
import divider from "../../assets/images/divider.png";

const PaymentSchedule = ({ scheduleData }) => {
  return (
    <div className="bg-black text-white py-10  2xl:px-[10%]">
      {/* Grid Layout */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-y-4">
        {scheduleData.map((item, index) => (
          <div key={index}>
            {/* Card */}
            <div className="relative flex flex-col items-center justify-between bg-gray-900 text-center p-6 h-[426px]">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <div className="my-4">
                <span className="text-yellow-400 text-2xl">
                  {item.percentage}
                </span>
              </div>
              <div className="text-2xl font-bold">{item.price}</div>
              <img src={divider} alt="" className="absolute top-0 -right-8 z-20"/>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-10 flex flex-col items-center bg-gray-800 p-6 rounded-md shadow-md">
        <h3 className="text-lg font-medium">Total</h3>
        <div className="text-3xl font-bold my-4">₹ 12,345,678</div>
        <p className="text-yellow-400">No hidden charges</p>
      </div>
    </div>
  );
};

export default PaymentSchedule;
