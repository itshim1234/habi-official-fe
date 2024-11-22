import React, { useState, useEffect, useRef } from "react";
import arrow from "../../assets/images/ArrowRight.png";
import DetailedReport from "./DetailedReport";
import asianPaints from "../../assets/images/asianpaints.png";
import dalmia from "../../assets/images/dalmia.png";
import godrej from "../../assets/images/godrej.png";
import havelles from "../../assets/images/havelles.png";
import jaquar from "../../assets/images/jaquar.png";
import jsw from "../../assets/images/jsw.png";
import kajaria from "../../assets/images/kajaria.png";
import sintex from "../../assets/images/sintex.png";
import downArrow from "../../assets/images/downArrow.png";
import "./styles.css";

const SelectInput = ({ value, onChange, options, label, name }) => (
  <div className="relative mb-4 md:mb-6">
    {label && (
      <label className="absolute -top-2.5 left-3 bg-black px-1 py-0 text-sm text-[#C0C0C0] capitalize">
        {label}*
      </label>
    )}
    <select
      value={value}
      onChange={onChange}
      name={name}
      className="text-white block w-full pl-4 py-2 md:py-2.5 border border-[#7C7C7C] rounded-lg bg-black focus:outline-none appearance-none pr-10"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-[#C0C0C0]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

const NumberInput = ({ value, onChange, name, label }) => (
  <div className="relative mb-3 md:mb-6">
    {label && (
      <label className="absolute -top-2.5 left-3 bg-black px-1 py-0 text-sm text-[#C0C0C0] capitalize">
        {label}*
      </label>
    )}
    <input
      type="number"
      value={value}
      onChange={onChange}
      name={name}
      className="text-white block w-full px-3 py-2 md:py-2.5 border border-[#7C7C7C] rounded-lg bg-black focus:outline-none"
    />
  </div>
);

function CostEstimator() {
  const [detailedCost, setDetailedCost] = useState(false);
  const [costEstimator, setCostEstimator] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const contentRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        setContentHeight(contentRef.current.scrollHeight);
      });

      resizeObserver.observe(contentRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  const handleDetailedCost = (bool) => {
    setDetailedCost(bool);
  };

  const handleCostEstimator = (bool) => {
    setCostEstimator(bool);
  };

  const [inputs, setInputs] = useState({
    state: localStorage.getItem("state") || "State",
    city: localStorage.getItem("city") || "City",
    locality: localStorage.getItem("locality") || "Locality",
    landType: localStorage.getItem("landType") || "Regular",
    side1: localStorage.getItem("side1") || "",
    side2: localStorage.getItem("side2") || "",
    side3: localStorage.getItem("side3") || "",
    side4: localStorage.getItem("side4") || "",
    length: localStorage.getItem("length") || "20",
    breadth: localStorage.getItem("breadth") || "20",
    customLength: localStorage.getItem("customLength") || "",
    customBreadth: localStorage.getItem("customBreadth") || "",
    floors: localStorage.getItem("floors") || "1",
    floorHeight: localStorage.getItem("floorHeight") || "10",
    packageType: localStorage.getItem("packageType") || "Package",
  });

  const [results, setResults] = useState({
    siteArea: 0,
    builtUpArea: 0,
    sump: 0,
    estimatedCost: 0,
  });

  //   const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const calculateArea = () => {
    const {
      side1,
      side2,
      side3,
      side4,
      length,
      breadth,
      customLength,
      customBreadth,
      landType,
    } = inputs;
    const a = parseFloat(side1),
      b = parseFloat(side2),
      c = parseFloat(side3),
      d = parseFloat(side4);

    let area = 0;
    if (landType === "Regular") {
      area =
        (length === "Custom" ? customLength : length) *
        (breadth === "Custom" ? customBreadth : breadth);
    } else if (landType === "Triangular" && side1 && side2 && side3) {
      const s = (a + b + c) / 2;
      area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else if (landType === "Irregular" && side1 && side2 && side3 && side4) {
      const s = (a + b + c + d) / 2;
      area = Math.sqrt((s - a) * (s - b) * (s - c) * (s - d));
    }
    return Math.round(area);
  };

  const calculateCost = () => {
    const area = calculateArea();
    const { floors, packageType } = inputs;
    const groundCoverage = 0.9,
      sumpCost = 5000 * floors;
    const builtUp = Math.round(area * groundCoverage * floors);
    const costMultiplier =
      packageType === "Essential"
        ? 1800
        : packageType === "Premium"
        ? 2075
        : 2485;
    const cost = builtUp * costMultiplier;

    setResults({
      siteArea: area,
      builtUpArea: builtUp,
      sump: sumpCost,
      estimatedCost: cost,
    });
  };

  useEffect(() => {
    calculateCost();
  }, [inputs]);

  useEffect(() => {
    Object.entries(inputs).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  }, [inputs]);

  const options = {
    state: ["Karnataka"],
    city: ["Bengaluru"],
    locality: ["KR Puram", "Marathahalli", "Jayanagar"],
    landType: ["Regular", "Triangular", "Irregular"],
    length: ["20", "30", "40", "50", "Custom"],
    breadth: ["20", "30", "40", "50", "Custom"],
    floors: ["1", "2", "3", "4", "5", "6", "7", "8"],
    floorHeight: ["10", "11", "12", "13"],
    packageType: ["Essential", "Premium", "Luxury"],
  };

  return (
    <div className={`h-fit flex flex-col bg-background w-full gradient-border font-giloryM`}>
      <div
        className={`w-full bg-black p-2 px-4 h-auto mb-2 mb:mb-3 md:px-20 lg:px-60 xl:px-[25%]`}
      >
        <div
          className="my-10 cursor-pointer w-full"
          onClick={() => {
            setCostEstimator(!costEstimator);
          }}
        >
          <h2 className="text-white text-[24px] lg:text-[32px]  mb-10 text-center inline mr-2">
            Cost Estimator
          </h2>
          <img src={downArrow} alt="" className="inline mb-2 rotate-180" />
        </div>
        <div
          className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out`}
          style={{
            maxHeight: costEstimator ? `${contentHeight}px` : "0px",
          }}
        >
          <div ref={contentRef}>
            <div className="grid md:grid-cols-2 gap-2 md:gap-4 mt-2">
              <SelectInput
                value={inputs.state}
                onChange={handleInputChange}
                options={options.state}
                name="state"
                label="State"
              />
              <SelectInput
                value={inputs.city}
                onChange={handleInputChange}
                options={options.city}
                name="city"
                label="City"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <SelectInput
                value={inputs.locality}
                onChange={handleInputChange}
                options={options.locality}
                name="locality"
                label="Locality"
              />
              <SelectInput
                value={inputs.landType}
                onChange={handleInputChange}
                options={options.landType}
                name="landType"
                label="Land Type"
              />
            </div>

            {inputs.landType === "Regular" && (
              <div className="grid grid-cols-2 gap-4 mb-2">
                <SelectInput
                  value={inputs.length}
                  onChange={handleInputChange}
                  options={options.length}
                  name="length"
                  label="Land dimensions"
                />
                {inputs.length === "Custom" && (
                  <NumberInput
                    value={inputs.customLength}
                    onChange={handleInputChange}
                    name="customLength"
                    label="Custom length"
                  />
                )}
                <SelectInput
                  value={inputs.breadth}
                  onChange={handleInputChange}
                  options={options.breadth}
                  name="breadth"
                />
                {inputs.breadth === "Custom" && (
                  <NumberInput
                    value={inputs.customBreadth}
                    onChange={handleInputChange}
                    label="Custom breadth"
                    name="customBreadth"
                  />
                )}
              </div>
            )}

            {inputs.landType === "Triangular" && (
              <div className="grid md:grid-cols-3 gap-4 mb-3">
                <NumberInput
                  value={inputs.side1}
                  onChange={handleInputChange}
                  placeholder="Side 1"
                  name="side1"
                  label="Side1"
                />
                <NumberInput
                  value={inputs.side2}
                  onChange={handleInputChange}
                  placeholder="Side 2"
                  name="side2"
                  label="Side2"
                />
                <NumberInput
                  value={inputs.side3}
                  onChange={handleInputChange}
                  placeholder="Side 3"
                  name="side3"
                  label="Side3"
                />
              </div>
            )}

            {inputs.landType === "Irregular" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                <NumberInput
                  value={inputs.side1}
                  onChange={handleInputChange}
                  placeholder="Side 1"
                  name="side1"
                  label="Side1"
                />
                <NumberInput
                  value={inputs.side2}
                  onChange={handleInputChange}
                  placeholder="Side 2"
                  name="side2"
                  label="Side2"
                />
                <NumberInput
                  value={inputs.side3}
                  onChange={handleInputChange}
                  placeholder="Side 3"
                  name="side3"
                  label="Side3"
                />
                <NumberInput
                  value={inputs.side4}
                  onChange={handleInputChange}
                  placeholder="Side 4"
                  name="side4"
                  label="Side4"
                />
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <SelectInput
                value={inputs.floors}
                onChange={handleInputChange}
                options={options.floors}
                name="floors"
                label="No of Floors"
              />
              <SelectInput
                value={inputs.floorHeight}
                onChange={handleInputChange}
                options={options.floorHeight}
                name="floorHeight"
                label="Floor Height"
              />
            </div>
            <div className="md:w-1/2 justify-center mx-auto">
              <SelectInput
                value={inputs.packageType}
                onChange={handleInputChange}
                options={options.packageType}
                name="packageType"
                label="Package"
              />
            </div>

            <div
              className={`items-center w-full bg-layoutColor p-2 flex-grow flex flex-col`}
            >
              <div className="bg-layoutColor text-black p-4 px-6 rounded-lg mt-4 w-full">
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Site Area</span>
                  <span className="text-white">{results.siteArea} sq ft</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-semibold text-white">
                    Built-Up Area
                  </span>
                  <span className="text-white">
                    {results.builtUpArea} sq ft
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-semibold text-white">
                    Sump Capacity
                  </span>
                  <span className="text-white">{results.sump} liters</span>
                </div>
                <hr className="border-1 border-[#7c7c7c] mx-auto my-2" />
                <div className="flex justify-between mt-2">
                  <span className="font-semibold text-white">
                    Estimated Cost
                  </span>
                  <span className="text-white">₹{results.estimatedCost}</span>
                </div>
              </div>

              <button
                className={`w-2/3 md:w-[50%]  py-2 mt-6 rounded-lg inline text-lg ${
                  detailedCost
                    ? "bg-white/30 backdrop-blur-md text-white border border-[#7c7c7c]"
                    : "bg-primary text-white"
                } `}
                onClick={() => {
                  setDetailedCost(!detailedCost);
                }}
              >
                {detailedCost ? "Close" : "Detailed cost"}
                <img
                  src={detailedCost ? "" : arrow}
                  alt=""
                  className="inline mb-0.5 ml-2 "
                />
              </button>

              {detailedCost && (
                <DetailedReport
                  sump={results.sump}
                  estimatedCost={results.estimatedCost}
                  floors={inputs.floors}
                  floorHeight={inputs.floorHeight}
                />
              )}

              <div className="relative font-inter antialiased">
                <main className="relative flex flex-col justify-center overflow-hidden">
                  <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                    <div className="text-center">
                      {/* Logo Carousel Animation */}
                      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul
                          ref={logosRef}
                          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                        >
                          <li>
                            <img src={asianPaints} alt="asianPaints" />
                          </li>
                          <li>
                            <img src={dalmia} alt="dalmia" />
                          </li>
                          <li>
                            <img src={jaquar} alt="jaquar" />
                          </li>
                          <li>
                            <img src={jsw} alt="jsw" />
                          </li>
                          <li>
                            <img src={havelles} alt="havelles" />
                          </li>
                          <li>
                            <img src={sintex} alt="sintex" />
                          </li>
                          <li>
                            <img src={kajaria} alt="kajaria" />
                          </li>
                          <li>
                            <img src={godrej} alt="godrej" />
                          </li>
                        </ul>
                        <ul
                          ref={logosRef}
                          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                        >
                          <li>
                            <img src={asianPaints} alt="asianPaints" />
                          </li>
                          <li>
                            <img src={dalmia} alt="dalmia" />
                          </li>
                          <li>
                            <img src={jaquar} alt="jaquar" />
                          </li>
                          <li>
                            <img src={jsw} alt="jsw" />
                          </li>
                          <li>
                            <img src={havelles} alt="havelles" />
                          </li>
                          <li>
                            <img src={sintex} alt="sintex" />
                          </li>
                          <li>
                            <img src={kajaria} alt="kajaria" />
                          </li>
                          <li>
                            <img src={godrej} alt="godrej" />
                          </li>
                        </ul>
                      </div>
                      {/* End: Logo Carousel Animation */}
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostEstimator;
