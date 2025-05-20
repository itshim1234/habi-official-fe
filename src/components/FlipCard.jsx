import React, { useState } from "react";
import { motion } from "framer-motion";
import downArrow from "../assets/images/downArrow.webp";

const FlipCard = ({
  package1,
  pkg1,
  pkg2,
  expandedPackage,
  toggleExpand,
  packageSet,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);



  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 lg:ml-3 xl:ml-14">
      <div
        className={`relative border rounded-lg p-4 lg:p-6 hover:shadow-lg hover:shadow-secondary transition-shadow w-[350px] md:w-[250px] md:h-[700px] lg:w-[333px] lg:h-[700px] ${
          package1 === pkg1.name ? "border-primary" : "border-[#7c7c7c]"
        } ${expandedPackage === pkg1.name ? "h-[650px]" : "h-14"}`}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full flex flex-col items-center text-white text-2xl rounded-lg"
            style={{ backfaceVisibility: "hidden", top: 0, left: 0 }}
          >
            <h2
              className={`text-xl flex font-giloryB md:mb-14 gap-2 justify-center cursor-pointer md:cursor-none ${
                expandedPackage === pkg1.name ? "mb-14" : "mb-0"
              }`}
              onClick={() => toggleExpand(pkg1.name)}
            >
              {pkg1.img && (
                <img src={pkg1.img} alt="Home construction Bengaluru" />
              )}
              {pkg1.name}
            </h2>
            <img
              src={downArrow}
              alt="Home construction Bengaluru"
              className={`absolute top-1 right-10 md:hidden cursor-pointer ${
                expandedPackage === pkg1.name
                  ? "rotate-180 transition-transform"
                  : ""
              }`}
              onClick={() => toggleExpand(pkg1.name)}
            />
            <div
              className={`${
                expandedPackage === pkg1.name || window.innerWidth >= 768
                  ? "block"
                  : "hidden relative"
              } md:block`}
            >
              <ul className="mb-6 text-sm text-gray-300 lg:leading-6">
                {pkg1.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="mb-2 flex items-start gap-2 text-left font-giloryM"
                  >
                    <img
                      src={feature.img}
                      alt="Home construction Bengaluru"
                      className="pt-1.5"
                    />
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] font-giloryS py-2 rounded transition ${
                  package1 === pkg1.id ? "bg-primary" : "bg-white text-black"
                }`}
                onClick={() => packageSet(pkg1.id)}
              >
                {package1 === pkg1.name ? "Selected" : "Select"}
              </button>
              {/* Toggle inside the card */}
              <label className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer">
                <span className="text-white mr-2 text-[16px] mb-2 w-[160%] text-giloryM leading-5">
                  Do you want to include Interior?
                </span>
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={() => setIsFlipped(!isFlipped)}
                />
                <div className="w-12 h-6 bg-gray-700 rounded-full p-1 relative">
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full"
                    animate={{ x: isFlipped ? 20 : 0 }}
                  />
                </div>
              </label>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full flex flex-col items-center text-white text-2xl rounded-lg"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              top: 0,
              left: 0,
            }}
          >
            <h2
              className={`text-xl flex font-giloryB md:mb-8 gap-2 cursor-pointer md:cursor-none ${
                expandedPackage === pkg2.name ? "mb-14" : "mb-0"
              }`}
              onClick={() => toggleExpand(pkg2.name)}
            >
              {pkg2.img && (
                <img src={pkg2.img} alt="Home construction Bengaluru" />
              )}
              {pkg2.name}
            </h2>
            {pkg2.desc && (
              <p
                className={`mb-4 mt-4 md:mt-0 text-sm font-giloryM italic ${
                  expandedPackage === pkg1.name ? "flex" : "hidden md:flex"
                }`}
              >
                {pkg2.desc}
              </p>
            )}
            <img
              src={downArrow}
              alt="Home construction Bengaluru"
              className={`absolute top-1 right-10 md:hidden cursor-pointer ${
                expandedPackage === pkg1.name
                  ? "rotate-180 transition-transform"
                  : ""
              }`}
              onClick={() => toggleExpand(pkg1.name)}
            />{" "}
            <div
              className={`${
                expandedPackage === pkg1.name || window.innerWidth >= 768
                  ? "block"
                  : "hidden relative"
              } md:block`}
            >
              <ul className="mb-6 text-sm text-gray-300 lg:leading-6">
                {pkg2.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="mb-2 flex items-start gap-2 text-left font-giloryM"
                  >
                    <img
                      src={feature.img}
                      alt="Home construction Bengaluru"
                      className="pt-1.5"
                    />
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] font-giloryS py-2 rounded transition ${
                  package1 === pkg2.id ? "bg-primary" : "bg-white text-black"
                }`}
                onClick={() => packageSet(pkg2.id)}
              >
                {package1 === pkg2.id ? "Selected" : "Select"}
              </button>
              {/* Toggle inside the card */}
              <label className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer">
                <span className="text-white mr-2 text-[16px] mb-2 w-[160%] text-giloryM leading-5">
                  Only the construction is needed.
                </span>
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={() => setIsFlipped(!isFlipped)}
                />
                {/* Toggle Background */}
                <div
                  className={`w-12 h-6 rounded-full  p-1 relative transition-colors duration-300 ${
                    isFlipped ? "bg-primary" : "bg-gray-700"
                  }`}
                >
                  {/* Toggle Knob */}
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full"
                    animate={{
                      x: isFlipped ? 20 : 0,
                      backgroundColor: isFlipped ? "#ffffff" : "#ffffff", // Optional color change
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </label>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlipCard;
