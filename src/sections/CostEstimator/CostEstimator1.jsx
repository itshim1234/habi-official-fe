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
import Regular from "../../assets/images/rectangle.png";
import Triangular from "../../assets/images/triangle.png";
import Irregular from "../../assets/images/polygon.png";

import essential from "../../assets/images/essential.png";
import premium from "../../assets/images/premium.png";
import luxury from "../../assets/images/luxury.png";

import a1 from "../../assets/images/a1.png";
import a2 from "../../assets/images/a2.png";
import a3 from "../../assets/images/a3.png";
import a4 from "../../assets/images/a4.png";
import a5 from "../../assets/images/a5.png";
import a6 from "../../assets/images/a6.png";
import a7 from "../../assets/images/a7.png";
import a8 from "../../assets/images/a8.png";

import b9 from "../../assets/images/b9.png";
import b10 from "../../assets/images/b10.png";
import b11 from "../../assets/images/b11.png";
import b12 from "../../assets/images/b12.png";
import b13 from "../../assets/images/b13.png";
import b14 from "../../assets/images/b14.png";
import b15 from "../../assets/images/b15.png";
import b16 from "../../assets/images/b16.png";
import b17 from "../../assets/images/b17.png";

import a from "../../assets/images/site.png";
import b from "../../assets/images/builtup.png";
import c from "../../assets/images/Water.png";
import ConsultationPopup from "../Hero/ConsultationPopup";

import "./styles.css";

const NumberInput = ({ value, onChange, name, label, placeholder }) => (
  <div className="relative mb-8 md:mb-10">
    {label && (
      <label className="absolute -top-7 left-0 px-1 py-0 text-[#C0C0C0] capitalize font-giloryM">
        {label}*
      </label>
    )}
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className="text-white block w-full pl-4 py-2 md:py-2.5  rounded-lg bg-[#1a1a1a] focus:outline-none appearance-none pr-10"
    />
  </div>
);
const RadioGroup = ({ value, onChange, options, name, label }) => (
  <div className="relative mb-8 md:mb-10">
    {label && (
      <label className="absolute -top-7 left-0 px-1 py-0 text-[#C0C0C0] capitalize font-giloryM">
        {label}*
      </label>
    )}
    <div className="flex flex-wrap gap-3 md:gap-4">
      {options.map((option) => (
        <div key={option} className="flex items-center">
          <input
            type="radio"
            id={`floorHeight-${option}`}
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            className="hidden"
          />
          <label
            htmlFor={`floorHeight-${option}`}
            className={`flex items-center justify-center w-fit  h-10 text-white rounded-lg cursor-pointer transition-all duration-300 
              ${value === option ? "bg-primary" : "bg-[#1a1a1a]"}
              ${name === "landType" ? "px-3" : "px-4"}`}
          >
            {option}
            {name === "landType" && (
              <img
                src={
                  option === "Regular"
                    ? Regular
                    : option === "Triangular"
                    ? Triangular
                    : Irregular
                }
                alt="shapes"
                className="ml-2"
              />
            )}
          </label>
        </div>
      ))}
    </div>
  </div>
);

const packages = [
  {
    name: "Essential",
    id: "Essential",
    features: [
      {
        text: "Column Size 6 inches",
        img: a1,
      },
      {
        text: "Exterior wall size 6 inches",
        img: a2,
      },
      {
        text: "2ft x 2ft Tiles",
        img: a3,
      },
      {
        text: "Cera Bath Fittings",
        img: a4,
      },
      {
        text: "Steel: Kamdhenu, Meenakshi, Prime Gold, One Steel",
        img: a5,
      },
      {
        text: "Cement: Dalmia & Penna",
        img: a6,
      },
      {
        text: "UPVC Windows (White)",
        img: a7,
      },
      {
        text: "10000 Liters Sump Capacity",
        img: a8,
      },
    ],
    img: essential,
  },
  {
    name: "Premium",
    id: "Premium",
    features: [
      {
        text: "Column Size 8 inches",
        img: a1,
      },
      {
        text: "Exterior wall size 8 inches",
        img: a2,
      },
      {
        text: "4ft x 2ft Tiles",
        img: a3,
      },
      {
        text: "jaquar Bath Fittings",
        img: a4,
      },
      {
        text: "Steel: JSW",
        img: a5,
      },
      {
        text: "Cement: Ramco and JSW",
        img: a6,
      },
      {
        text: "UPVC Windows (White)",
        img: a7,
      },
      {
        text: "12000 Liters Sump Capacity",
        img: a8,
      },
    ],
    img: premium,
  },
  {
    name: "Luxury",
    id: "Luxury",
    features: [
      {
        text: "Column Size 8 inches",
        img: a1,
      },
      {
        text: "Exterior wall size 8 inches",
        img: a2,
      },
      {
        text: "4ft x 2ft Tiles & Marble Flooring in Living and Dining Area",
        img: a3,
      },
      {
        text: "Jaquar & Kohler Bath Fittings",
        img: a4,
      },
      {
        text: "Steel: JSW and TaTa",
        img: a5,
      },
      {
        text: "Cement: Ramco, JSW, UltraTech and ACC",
        img: a6,
      },
      {
        text: "UPVC Windows (Color)",
        img: a7,
      },
      {
        text: "15000 Liters Sump Capacity",
        img: a8,
      },
    ],
    img: luxury,
  },
  {
    name: "Essential +",
    id: "EssentialPlus",
    desc: "(Essential + Interior)",
    features: [
      {
        text: "Kitchen worth ₹1,50,000/-",
        img: b9,
      },
      {
        text: "TV Unit Worth ₹30,000/-",
        img: b10,
      },
      {
        text: "Shoe Rack Worth ₹10,000/-",
        img: b11,
      },
      {
        text: "Crockery Unit Worth ₹25,000/-",
        img: b12,
      },
      {
        text: "Wardrobe Worth ₹1,00,000/-",
        img: b13,
      },
      {
        text: "Vanity Counter Worth ₹10,000/-",
        img: b14,
      },
      {
        text: "Dressing Table Worth ₹10,000/-",
        img: b15,
      },
      {
        text: "Peripheral False Ceiling Worth ₹150/- per sq ft",
        img: b16,
      },
      {
        text: "Ledgers Worth ₹2500/- per sq ft",
        img: b17,
      },
    ],
  },
  {
    name: "Premium  +",
    id: "PremiumPlus",
    desc: "(Premium + Interior)",

    features: [
      {
        text: "Kitchen worth ₹2,00,000/-",
        img: b9,
      },
      {
        text: "TV Unit Worth ₹50,000/-",
        img: b10,
      },
      {
        text: "Shoe Rack Worth ₹20,000/-",
        img: b11,
      },
      {
        text: "Crockery Unit Worth ₹35,000/-",
        img: b12,
      },
      {
        text: "Wardrobe Worth ₹1,50,000/-",
        img: b13,
      },
      {
        text: "Vanity Counter Worth ₹15,000/-",
        img: b14,
      },
      {
        text: "False Ceiling Worth ₹200/- per sq ft",
        img: b15,
      },
      {
        text: "Ledgers Worth ₹5500/- per sq ft",
        img: b16,
      },
    ],
  },
  {
    name: "Luxury +",
    desc: "(Luxury + Interior)",
    id: "LuxuryPlus",
    features: [
      {
        text: "Kitchen worth ₹2,50,000/-",
        img: b9,
      },
      {
        text: "TV Unit Worth ₹75,000/-",
        img: b10,
      },
      {
        text: "Shoe Rack Worth ₹30,000/-",
        img: b11,
      },
      {
        text: "Crockery Unit Worth ₹35,000/-",
        img: b12,
      },
      {
        text: "Wardrobe Worth ₹2,00,000/-",
        img: b13,
      },
      {
        text: "Vanity Counter Worth ₹25,000/-",
        img: b14,
      },
      {
        text: "Dressing Table Worth ₹25,000/-",
        img: b15,
      },
      {
        text: "Peripheral False Ceiling Worth ₹230/- per sq ft",
        img: b16,
      },
      {
        text: "Ledgers Worth ₹10000/- per sq ft",
        img: b17,
      },
    ],
  },
];

function CostEstimator1({ costEstimatorOpen }) {
  const [detailedCost, setDetailedCost] = useState(false);
  const [costEstimator, setCostEstimator] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [isPopupVisible1, setIsPopupVisible] = useState(false);
  const [package1, setPackage] = useState("");
  const [expandedPackage, setExpandedPackage] = useState(null);

  const contentRef = useRef(null);
  const logosRef = useRef(null);

  const togglePopup = () => setIsPopupVisible((prev) => !prev);

  useEffect(() => {
    // Synchronize costEstimator state with costEstimatorOpen prop
    if (costEstimatorOpen) {
      setCostEstimator(true);
    }
  }, [costEstimatorOpen]);
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

  const packageSet = (typeOfPackage) => {
    setPackage(typeOfPackage);
  };

  const toggleExpand = (pkgName) => {
    setExpandedPackage(expandedPackage === pkgName ? null : pkgName);
  };

  const handleCostEstimator = (bool) => {
    setCostEstimator(bool);
  };

  const [inputs, setInputs] = useState({
    landType: "Regular",
    side1: "",
    side2: "",
    side3: "",
    side4: "",
    length: "",
    breadth: "",
    customLength: "",
    customBreadth: "",
    floors: "1",
    floorHeight: "10", // Default to "10"
  });

  const [results, setResults] = useState({
    siteArea: 0,
    builtUpArea: 0,
    sump: 0,
    estimatedCost: 0,
    calculatedSumpCapacity: 0,
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
    const { floors } = inputs;
    const groundCoverage = 0.9;

    // Determine the base sump cost by package
    let baseSumpCost = 0;
    if (package1 === "Essential") {
      baseSumpCost = 10000;
    } else if (package1 === "Premium") {
      baseSumpCost = 12000;
    } else if (package1 === "Luxury") {
      baseSumpCost = 15000;
    }

    // Calculate the sump cost based on floors
    const calculatedSumpCapacity = 5000 * floors;
    var sumpCost = 0;

    if (calculatedSumpCapacity > baseSumpCost) {
      sumpCost = calculatedSumpCapacity - baseSumpCost;
    }

    // Final sump cost, ensuring it respects the package default

    // Calculate the built-up area and cost multiplier
    const builtUp = Math.round(area * groundCoverage * floors);
    const costMultiplier =
      package1 === "Essential"
        ? 2100
        : package1 === "Premium"
        ? 2450
        : package1 === "Luxury"
        ? 2750
        : package1 === "EssentialPlus"
        ? 2400
        : package1 === "PremiumPlus"
        ? 2850
        : package1 === "LuxuryPlus"
        ? 3250
        : 0;

    // Calculate the final cost
    const cost = builtUp * costMultiplier;

    // Set the results
    setResults({
      siteArea: area,
      builtUpArea: builtUp,
      sump: sumpCost,
      estimatedCost: cost,
      calculatedSumpCapacity: calculatedSumpCapacity,
    });
  };

  useEffect(() => {
    calculateCost();
  }, [inputs, package1]);

  useEffect(() => {
    Object.entries(inputs).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  }, [inputs]);

  const options = {
    landType: ["Regular", "Triangular", "Irregular"],
    floors: ["1", "2", "3", "4", "5", "6"],
    floorHeight: ["10", "11", "12", "13"],
  };

  return (
    <div className={`h-fit flex flex-col bg-background w-full gradient-border`}>
      <div
        className={`relative w-full bg-black p-2 h-auto mb-2 mb:mb-3 2xl:px-0`}
      >
        <div
          className="my-4 md:my-10 cursor-pointer w-full"
          onClick={() => {
            setCostEstimator(!costEstimator);
          }}
        >
          <h2 className="text-white text-[24px] lg:text-[32px] font-giloryS mb-10 text-center inline mr-2 ">
            Cost Estimator
          </h2>
          <img
            src={downArrow}
            alt=""
            className={`inline mb-2 transition-transform duration-500 ${
              costEstimator ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`relative overflow-hidden transition-[max-height] duration-1000 ease-in-out`}
          style={{
            maxHeight: costEstimator ? `${contentHeight}px` : "0px",
          }}
        >
          <div ref={contentRef}>
            <div className="bg-black text-white flex flex-col justify-center items-center p-4 mb-10">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-giloryM">Select Packages*</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-40">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative border  rounded-lg p-4 lg:p-6 hover:shadow-lg hover:shadow-secondary transition-shadow w-[350px] md:w-[234px] md:h-[540px] lg:w-[333px] lg:h-[501px] ${
                      package1 === pkg.name
                        ? "border-primary"
                        : "border-[#7c7c7c]"
                    }
                    
                    ${expandedPackage === pkg.name ? "h-[470px]" : "h-fit"}`}
                  >
                    <h2
                      className={`text-xl flex font-giloryB md:mb-14 gap-2 justify-center cursor-pointer md:cursor-none ${
                        expandedPackage === pkg.name ? "mb-14" : "mb-0"
                      }
`}
                      onClick={() => toggleExpand(pkg.name)}
                    >
                      {pkg.img && <img src={pkg.img} alt="" />}
                      {pkg.name}
                      {pkg.desc && (
                        <p
                          className={`absolute md:flex top-14 text-sm font-giloryM italic ${
                            expandedPackage === pkg.name ? "flex" : "hidden"
                          }`}
                        >
                          {pkg.desc}
                        </p>
                      )}
                    </h2>

                    <img
                      src={downArrow}
                      alt=""
                      className={`absolute top-5 right-10 md:hidden cursor-pointer ${
                        expandedPackage === pkg.name
                          ? "rotate-180 transition-transform"
                          : ""
                      }`}
                      onClick={() => toggleExpand(pkg.name)}
                    />

                    <div
                      className={`${
                        expandedPackage === pkg.name || window.innerWidth >= 768
                          ? "block"
                          : "hidden"
                      } md:block`}
                    >
                      <ul className="mb-6 text-sm text-gray-300 lg:leading-6">
                        {pkg.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="mb-2 flex items-start gap-2 text-left font-giloryM"
                          >
                            <img src={feature.img} alt="" className="pt-1.5" />{" "}
                            {feature.text}
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[80%] font-giloryS py-2 rounded transition ${
                          package1 === pkg.id
                            ? "bg-primary"
                            : "bg-white text-black"
                        }`}
                        onClick={() => packageSet(pkg.id)}
                      >
                        {package1 === pkg.name ? "Selected" : "Select"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 md:px-20 lg:px-40 xl:px-[10%] 2xl:px-[15%] px-4">
              <div className="w-full 2xl:px-1%">
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4 mt-6">
                  <RadioGroup
                    value={inputs.landType}
                    onChange={handleInputChange}
                    options={options.landType}
                    name="landType"
                    label="Land Type"
                  />
                </div>

                {inputs.landType === "Regular" && (
                  <div className="grid grid-cols-2 gap-x-4 mb-2 mt-3 md:mt-0">
                    <NumberInput
                      value={inputs.length}
                      onChange={handleInputChange}
                      name="length"
                      label="Land dimensions"
                      placeholder="Length"
                    />
                    {inputs.length === "Custom" && (
                      <NumberInput
                        value={inputs.customLength}
                        onChange={handleInputChange}
                        name="customLength"
                        label="Custom length"
                      />
                    )}
                    <NumberInput
                      value={inputs.breadth}
                      onChange={handleInputChange}
                      name="breadth"
                      placeholder="Breadth"
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
                      name="side1"
                      label="Side1"
                    />
                    <NumberInput
                      value={inputs.side2}
                      onChange={handleInputChange}
                      name="side2"
                      label="Side2"
                    />
                    <NumberInput
                      value={inputs.side3}
                      onChange={handleInputChange}
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
                      name="side1"
                      label="Side1"
                    />
                    <NumberInput
                      value={inputs.side2}
                      onChange={handleInputChange}
                      name="side2"
                      label="Side2"
                    />
                    <NumberInput
                      value={inputs.side3}
                      onChange={handleInputChange}
                      name="side3"
                      label="Side3"
                    />
                    <NumberInput
                      value={inputs.side4}
                      onChange={handleInputChange}
                      name="side4"
                      label="Side4"
                    />
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-4">
                  <RadioGroup
                    value={inputs.floors}
                    onChange={handleInputChange}
                    options={options.floors}
                    name="floors"
                    label="No of Floors"
                  />
                  <RadioGroup
                    value={inputs.floorHeight}
                    onChange={handleInputChange}
                    options={options.floorHeight}
                    name="floorHeight"
                    label="Floor Height"
                  />
                </div>
              </div>

              <div className={`w-full bg-layoutColor py-2`}>
                <div className="w-full bg-black flex flex-col 2xl:ml-10">
                  {/* Details Section */}
                  <div className="bg-black text-white md:p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4 md:space-x-10 font-giloryM md:text-lg">
                      {/* Site Area */}
                      <div className="text-center">
                        <div className="flex">
                          <img
                            src={a}
                            alt=""
                            className="w-6 h-6 hidden md:flex mr-2"
                          />
                          Site Area
                        </div>
                        <div className="text-lg md:text-2xl font-giloryS mt-2">
                          {results.siteArea} sq ft
                        </div>
                      </div>
                      {/* Built-up Area */}
                      <div className="text-center">
                        <div className=" flex">
                          <img
                            src={b}
                            alt=""
                            className="w-6 h-6 hidden md:flex mr-2"
                          />
                          Built-up Area
                        </div>
                        <div className="text-lg md:text-2xl font-giloryS mt-2">
                          {results.builtUpArea} sq ft
                        </div>
                      </div>
                      {/* Sump Capacity */}
                      <div className="text-center">
                        <div className=" flex">
                          <img
                            src={c}
                            alt=""
                            className="w-6 h-6 hidden md:flex mr-2"
                          />
                          Sump Capacity
                        </div>
                        <div className="text-lg md:text-2xl font-giloryS mt-2">
                          {results.calculatedSumpCapacity} liters
                        </div>
                      </div>
                    </div>
                    {/* Estimated Cost */}
                    <div className="text-center flex justify-center border border-[#7c7c7c] w-fit mx-auto px-6 md:px-10 py-4 md:py-6 font-giloryS my-10">
                      <div className="mr-4 text-lg md:text-[32px]">
                        * Estimated Cost
                      </div>
                      <div className="text-2xl md:text-[40px]">
                        ₹ {results.estimatedCost.toLocaleString("en-IN")}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-center space-x-3">
                    <button
                      className={`rounded-lg py-2 px-3 md:px-8 2xl:px-8 inline text-sm md:text-lg font-giloryM ${
                        detailedCost
                          ? "bg-white/30 backdrop-blur-md text-white border border-[#7c7c7c]"
                          : "bg-primary text-white"
                      } ${
                        results.estimatedCost === 0
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => {
                        if (results.estimatedCost > 0) {
                          setDetailedCost(!detailedCost);
                        } else {
                          alert(
                            "Please select the required fields to calculate the cost."
                          );
                        }
                      }}
                      disabled={results.estimatedCost === 0}
                    >
                      {detailedCost ? "Hide" : "Detailed Cost"}
                    </button>
                    <button
                      className="bg-gray-800 text-white py-2 px-3 md:px-8 2xl:px-8 border text-sm md:text-lg border-gray-600 rounded-lg"
                      onClick={togglePopup} // Show the popup on click
                    >
                      Get Personalized Offers
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
                <div className="w-full mx-auto px-4 md:px-6 py-24">
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
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        {isPopupVisible1 && (
          <div
            className={`absolute w-[340px] md:w-[770px] lg:w-[1060px] h-fit left-1/2 md:left-1/2 transform -translate-x-1/2 z-50 ${
              !detailedCost
                ? "top-1/2 md:top-[62%] md:-translate-y-1/2"
                : "top-[15%] md:top-[16%] md:-translate-y-[14%]"
            }`}
          >
            <ConsultationPopup onClose={togglePopup} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CostEstimator1;
