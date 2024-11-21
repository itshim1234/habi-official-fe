import React from "react";
import arrow from "../../assets/images/ArrowRight.png";
import "../CostEstimator/styles.css";

function AboutHabi() {
  return (
    <div className="w-full h-fit flex justify-center text-white">
      <div className="absolute top-8 left-8">Logo</div>
      <div className="absolute top-8 right-8">
        {" "}
        <img
          src={arrow}
          alt="Logo"
          className="inline rotate-180 pt-0.5 mr-1 "
        />
        <p className="inline border-b pb-1">Go back to Website</p>
      </div>

      <p className="mt-24">About Habi</p>
      <div className="gradient-border mt-40"> aergawergt</div>
    </div>
  );
}

export default AboutHabi;
