import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import DetailedReport from "./DetailedReport";
import asianPaints from "../../assets/images/asianpaints.webp";
import dalmia from "../../assets/images/dalmia.webp";
import godrej from "../../assets/images/godrej.webp";
import havelles from "../../assets/images/havelles.webp";
import jaquar from "../../assets/images/jaquar.webp";
import jsw from "../../assets/images/jsw.webp";
import kajaria from "../../assets/images/kajaria.webp";
import sintex from "../../assets/images/sintex.webp";
import downArrow from "../../assets/images/downArrow.webp";
import Regular from "../../assets/images/rectangle.webp";
import Triangular from "../../assets/images/triangle.webp";
import Irregular from "../../assets/images/polygon.webp";
import tank from "../../assets/images/Tank.webp";
import bathroom from "../../assets/images/Bathroom.webp";

import essential from "../../assets/images/essential.webp";
import premium from "../../assets/images/premium.webp";
import luxury from "../../assets/images/luxury.webp";
import Line from "../../assets/images/Line1.webp";

import a1 from "../../assets/images/a1.webp";
import a2 from "../../assets/images/a2.webp";
import a3 from "../../assets/images/a3.webp";
import a4 from "../../assets/images/a4.webp";
import a5 from "../../assets/images/a5.webp";
import a6 from "../../assets/images/a6.webp";
import a7 from "../../assets/images/a7.webp";
import a8 from "../../assets/images/a8.webp";
import b9 from "../../assets/images/b9.webp";
import b10 from "../../assets/images/b10.webp";
import b11 from "../../assets/images/b11.webp";
import b12 from "../../assets/images/b12.webp";
import b13 from "../../assets/images/b13.webp";
import b14 from "../../assets/images/b14.webp";
import b15 from "../../assets/images/b15.webp";
import b16 from "../../assets/images/b16.webp";
import b17 from "../../assets/images/b17.webp";

import a from "../../assets/images/site.webp";
import b from "../../assets/images/builtup.webp";
import c from "../../assets/images/Water.webp";

import FloorHeightSelector from "../../components/FloorHeightselector";
import FloorSelector from "../../components/FloorSelector";
import FlipCard from "../../components/FlipCard";
import PriceComparison from "../../components/PriceComparison";

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
      {
        text: "Water overhead tank ₹7.5/- per liter",
        img: tank,
      },
      {
        text: "2 bathrooms are included in the 1200 sq ft construction.",
        img: bathroom,
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
      {
        text: "Water overhead tank ₹8/- per liter",
        img: tank,
      },
      {
        text: "2 bathrooms and 1 Powder room are included in the 1200 sq ft construction.",
        img: bathroom,
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
      {
        text: "Water overhead tank ₹8.25/- per liter",
        img: tank,
      },
      {
        text: "2 bathrooms and 1 Powder room are included in the 1200 sq ft construction.",
        img: bathroom,
      },
    ],
    img: luxury,
  },
  {
    name: "Essential Plus",
    id: "EssentialPlus",
    desc: "A collection of essential items,including interior items.",
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
    name: "Premium  Plus",
    id: "PremiumPlus",
    desc: "A collection of essential items,including interior items.",

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
    name: "Luxury Plus",
    desc: "A collection of essential items,including interior items.",
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

function CostEstimator1({
  costEstimatorOpen,
  togglePopup,
  toggleQuotationPopup,
  title,
}) {
  const [detailedCost, setDetailedCost] = useState(false);
  const [costEstimator, setCostEstimator] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [package1, setPackage] = useState("Essential");
  const [expandedPackage, setExpandedPackage] = useState(null);
  const [halfFloor, setHalfFloor] = useState(false);
  const [basement, setBasement] = useState(false);

  const [builtUp1, setBuiltUp] = useState(0);
  const [floorHeightCost1, setFloorHeightCost] = useState(0);
  const [finalSumpCost1, setFinalSumpCost] = useState(0);
  const [basementCost, setBasementCost] = useState(0);

  const contentRef = useRef(null);
  const logosRef = useRef(null);
  const estimatorRef = useRef(null);

  useEffect(() => {
    // Synchronize costEstimator state with costEstimatorOpen prop
    if (costEstimatorOpen) {
      setCostEstimator(true);
    }
  }, [costEstimatorOpen]);
  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      });

      resizeObserver.observe(contentRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    if (costEstimator && estimatorRef.current) {
      estimatorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [costEstimator]);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  const halfFloor1 = () => {
    setHalfFloor(!halfFloor);
  };
  const setBasement1 = () => {
    setBasement((prev) => !prev);
  };

  const packageSet = (typeOfPackage) => {
    setPackage(typeOfPackage);
  };

  const toggleExpand = (pkgName) => {
    setExpandedPackage(expandedPackage === pkgName ? null : pkgName);
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
    floors: 1,
    floorHeight: 10, // Default to "10"
  });

  const [results, setResults] = useState({
    siteArea: 0,
    builtUpArea: 0,
    sumpCapacity: 0,
    sumpBuilt: 0,
    sumpPrice: 0,
    estimatedCost: 0,

    totalCost: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange1 = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  var builtUp = 0;
  var floorHeightCost = 0;
  var finalSumpCost = 0;
  var baseCost = 0;

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
    const groundCoverage = 0.85;

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
    var ActualSump = 0;



    if (calculatedSumpCapacity > baseSumpCost) {
      ActualSump = calculatedSumpCapacity - baseSumpCost;
    }


    // Final sump cost, ensuring it respects the package default
    finalSumpCost = ActualSump * 17;
    setFinalSumpCost(finalSumpCost);



    // Calculate the built-up area and cost multiplier
    if (area > 0) {
      const aboveGroundFloors = floors > 0 ? floors - 1 : 0; // ground floor is base

      // Always add ground floor
      builtUp = area;

      // Add basement if selected
      if (basement) {

        builtUp += area * 0.9;
      }

      // Add floors (1st to 5th) if selected
      builtUp += aboveGroundFloors * area * 0.85;

   

      // Save the calculated builtUp to state

    

      if (halfFloor && floors >= 1) {
        if (area <= 1200) {
          builtUp += 0.85 * 0.5 * area;
        } else if (area <= 1500) {
          builtUp += 0.85 * 0.4 * area;
        } else if (area <= 1800) {
          builtUp += 0.85 * 0.35 * area;
        } else if (area <= 2400) {
          builtUp += 0.85 * 0.25 * area;
        }
      }

      setBuiltUp(builtUp);
    }

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
   
    //calculating cost only for floors

    var cost = 0;
    if (basement) {
      var modifiedBuiltUp = builtUp - area * 0.9;
      cost = modifiedBuiltUp * costMultiplier;
    } else {

      cost = builtUp * costMultiplier;

    }


    if (basement) {
      if (package1 === "Essential" || package1 === "EssentialPlus") {

        baseCost = area * 0.9 * 1400;
      } else if (package1 === "Premium" || package1 === "PremiumPlus") {
        baseCost = area * 0.9 * 1500;
      } else if (package1 === "Luxury" || package1 === "LuxuryPlus") {
        baseCost = area * 0.9 * 1600;
      }
    } else {
      baseCost = 0;
    }

    setBasementCost(baseCost);


    cost = cost + finalSumpCost + baseCost;


    var x = 0;

    if (inputs.floorHeight == 10) {
      x = 0;
    } else if (inputs.floorHeight == 11) {
      x = 8000;
    } else if (inputs.floorHeight == 12) {
      x = 16000;
    } else if (inputs.floorHeight == 13) {
      x = 24000;
    } else if (inputs.floorHeight == 14) {
      x = 32000;
    } else if (inputs.floorHeight == 15) {
      x = 40000;
    }
    floorHeightCost = inputs.floorHeight * x * floors;
    setFloorHeightCost(floorHeightCost);

    const total = cost + floorHeightCost;

    // Set the results
    setResults({
      siteArea: area,
      builtUpArea: builtUp,
      sumpBuilt: ActualSump,
      sumpPrice: finalSumpCost,
      estimatedCost: cost,
      sumpCapacity: calculatedSumpCapacity,
      totalCost: total,
    });
  };

  useEffect(() => {
    calculateCost();
  }, [inputs, package1, halfFloor, basement, basementCost]);

  useEffect(() => {
    Object.entries(inputs).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  }, [inputs]);

  const options = {
    landType: ["Regular", "Triangular", "Irregular"],
  };

  return (
    <div className={`h-fit flex flex-col bg-background w-full gradient-border`}>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="Calculate Cost of the total cost to building a new house"
        />
        <link
          rel="canonical"
          href="https://habi.one/Construction-Cost-Calculator"
        />
      </Helmet>
      <div
        className={`relative w-full bg-black p-2 h-auto mb-2 mb:mb-3 2xl:px-0`}
      >
        <div
          className="my-4 md:my-10 cursor-pointer w-full"
          onClick={() => {
            setCostEstimator(!costEstimator);
          }}
        >
          <h2 className="text-white text-[24px] lg:text-[32px] font-giloryS mb-10 text-center inline mr-2">
            Construction Cost Calculator
          </h2>
          <img
            src={downArrow}
            alt="Home construction Bengaluru"
            className={`inline mb-2 transition-transform duration-500 ${
              costEstimator ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          ref={estimatorRef}
          className={`relative overflow-hidden transition-[max-height] duration-1000 ease-in-out`}
          style={{
            maxHeight: costEstimator ? `${contentHeight}px` : "0px",
          }}
        >
          <div ref={contentRef}>
            <div className="bg-black text-white flex flex-col justify-center items-center p-4 mb-10 2xl:px-60">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-giloryM">Select Packages*</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FlipCard
                  package1={package1}
                  pkg1={packages[0]}
                  pkg2={packages[3]}
                  expandedPackage={expandedPackage}
                  toggleExpand={toggleExpand}
                  packageSet={packageSet}
                />
                <FlipCard
                  package1={package1}
                  pkg1={packages[1]}
                  pkg2={packages[4]}
                  expandedPackage={expandedPackage}
                  toggleExpand={toggleExpand}
                  packageSet={packageSet}
                />
                <FlipCard
                  package1={package1}
                  pkg1={packages[2]}
                  pkg2={packages[5]}
                  expandedPackage={expandedPackage}
                  toggleExpand={toggleExpand}
                  packageSet={packageSet}
                />
              </div>
              <p className="w-full mt-8 italic text-center text-[#C0C0C0] font-giloryM  mb-1.5">
                Note: 1 interior set for 1200 sq ft, and 2 interior sets for
                2400 sq ft.
              </p>
            </div>
            <div className="flex flex-col md:px-6 lg:px-40 xl:px-[20%] 2xl:px-[28%] px-4">
              <div className="w-full 2xl:px-1%">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
                  <RadioGroup
                    value={inputs.landType}
                    onChange={handleInputChange}
                    options={options.landType}
                    name="landType"
                    label="Land Type"
                  />
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
                </div>
                <div className="grid grid-cols-2 md:w-96 mx-auto mb-8">
                  <FloorSelector
                    selectedFloor={inputs.floors} // Ensure correct floor number is passed
                    setSelectedFloor={(floor) =>
                      handleInputChange1("floors", floor)
                    }
                    setHalfFloor={halfFloor1} // Pass halfFloor state updater
                    setBasement={setBasement1}
                  />

                  <FloorHeightSelector
                    setSelectedFloorHeight={(height) =>
                      handleInputChange1("floorHeight", height)
                    }
                  />
                </div>
              </div>

              <div className={`w-full bg-layoutColor py-2`}>
                <img
                  src={Line}
                  alt="Home construction Bengaluru"
                  className="w-full mb-4 mx-auto"
                />

                <div className="w-full bg-black flex flex-col 2xl:ml-10">
                  {/* Details Section */}
                  <div className="bg-black text-white md:p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4 md:space-x-10 font-giloryM md:text-lg">
                      {/* Site Area */}
                      <div className="text-center">
                        <div className="flex">
                          <img
                            src={a}
                            alt="Home construction Bengaluru"
                            className="w-6 h-6 hidden md:flex mr-2"
                          />
                          Site Area
                        </div>
                        <div className="text-lg md:text-2xl font-giloryS mt-2">
                          {results.siteArea} sq ft
                        </div>
                      </div>
                      <div className="border-r h-10"></div>
                      {/* Built-up Area */}
                      <div className="text-center">
                        <div className=" flex">
                          <img
                            src={b}
                            alt="Home construction Bengaluru"
                            className="w-6 h-6 hidden md:flex mr-2"
                          />
                          Built-up Area
                        </div>
                        <div className="text-lg md:text-2xl font-giloryS mt-2">
                          {results.builtUpArea} sq ft
                        </div>
                      </div>
                      <div className="border-r h-10"></div>
                      {/* Sump Capacity */}
                      <div className="text-center">
                        <div className=" flex">
                          <img
                            src={c}
                            alt="Home construction Bengaluru"
                            className="w-6 h-6 hidden md:flex mr-2"
                          />
                          Sump Capacity
                        </div>
                        <div className="text-lg md:text-2xl font-giloryS mt-2">
                          {results.sumpCapacity} liters
                        </div>
                      </div>
                    </div>
                    {/* Estimated Cost */}
                    <div className="text-center flex justify-center border border-[#7c7c7c] w-fit mx-auto px-6 md:px-10 py-4 md:py-6 font-giloryS my-10">
                      <div className="mr-4 text-lg md:text-[32px]">
                        * Estimated Cost
                      </div>
                      <div className="text-2xl md:text-[40px]">
                        ₹ {results.totalCost.toLocaleString("en-IN")}
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
                  <PriceComparison
                    builtUp={
                      basement ? builtUp1 - results.siteArea * 0.9 : builtUp1
                    }
                    package1={package1}
                    floorHeightCost={floorHeightCost1}
                    basementCost={basementCost}
                    sumpCost={finalSumpCost1}
                    isBasementSelected={basement}
                  />
                </div>
              </div>
            </div>

            {detailedCost && (
              <DetailedReport
                totalSump={results.sumpCapacity}
                consSump={results.sumpBuilt}
                sumpCost={results.sumpPrice}
                estimatedCost={results.estimatedCost}
                floors={inputs.floors}
                floorHeight={inputs.floorHeight}
                package1={package1}
                landArea={results.siteArea}
                landType={inputs.landType}
                length={inputs.length}
                breadth={inputs.breadth}
                builtUp={builtUp1}
                toggleQuotationPopup={toggleQuotationPopup}
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
      </div>
    </div>
  );
}

export default CostEstimator1;
