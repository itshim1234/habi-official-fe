import React, { useMemo } from "react";

const PriceComparison = ({ builtUp, floorHeightCost, sumpCost, package1 }) => {
  const plans = useMemo(
    () => [
      {
        name: "Essential",
        id: "Essential",
        price: builtUp * 2100 + floorHeightCost + sumpCost,
      },

      {
        name: "Premium",
        id: "Premium",
        price: builtUp * 2450 + floorHeightCost + sumpCost,
      },

      {
        name: "Luxury",
        id: "Luxury",
        price: builtUp * 2750 + floorHeightCost + sumpCost,
      },
      {
        name: "Essential Plus",
        id: "EssentialPlus",

        price: builtUp * 2400 + floorHeightCost + sumpCost,
      },
      {
        name: "Premium Plus",
        id: "PremiumPlus",

        price: builtUp * 2850 + floorHeightCost + sumpCost,
      },
      {
        name: "Luxury Plus",
        id: "LuxuryPlus",

        price: builtUp * 3250 + floorHeightCost + sumpCost,
      },
    ],
    [builtUp, floorHeightCost, sumpCost]
  );

  return (
    <div className="bg-black text-white py-10 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Package Comparison</h2>
      <div className="grid grid-cols-3 gap-5 md:gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col items-center border-b p-4 rounded-lg ${
              plan.id == package1 ? "border-secondary" : ""
            }`}
          >
            <p
              className={`text-sm md:text-lg font-medium ${
                plan.id == package1 ? "text-secondary" : ""
              }`}
            >
              {plan.name}
            </p>
            <p
              className={`md:text-2xl font-semibold  ${
                plan.id == package1 ? "text-secondary" : ""
              }`}
            >
              ₹ {plan.price.toLocaleString("en-IN")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceComparison;
