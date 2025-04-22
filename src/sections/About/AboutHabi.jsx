import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import house from "../../assets/images/house.webp";
import arrow from "../../assets/images/ArrowRight.webp";
import "../CostEstimator/styles.css";
import value1 from "../../assets/images/value1.webp";
import value2 from "../../assets/images/value2.webp";
import value3 from "../../assets/images/value3.webp";
import value4 from "../../assets/images/value4.webp";
import logo from "../../assets/images/Logo1.webp";

import buildings from "../../assets/images/buildings.webp";
import buildings1 from "../../assets/images/buildings1.webp";
import leaf from "../../assets/images/Leaf.webp";
import palette from "../../assets/images/Palette.webp";
import userspeak from "../../assets/images/userSpeak.webp";

const AboutHabi = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page is at the top on load
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div className="bg-black text-white min-h-screen border-b border-[#7c7c7c]">
      <Helmet>
        <title>About Habi</title>
        <meta
          name="description"
          content="We provide design-centric approached services that are tailored to meet your unique ideas, needs, desires & requirements"
        />
        <link rel="canonical" href="https://habi.one/about-habi" />
      </Helmet>
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <img
          src={logo}
          alt="habi The Way Of Living"
          className="w-20 md:w-32 lg:w-32 2xl:w-40 animation cursor-pointer rounded-full"
        />
        <div
          className="absolute top-5 md:top-10 right-5 md:right-10 z-10 cursor-pointer"
          onClick={handleGoBack}
        >
          <img
            src={arrow}
            alt="left"
            className="inline rotate-180 pt-0.5 mr-1 mb-1"
          />
          <p className="inline border-b pb-1 md:text-2xl font-giloryS">Back</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-0 md:px-4 lg:px-20 py-8">
        {/* Introduction Section */}
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] text-white font-giloryB text-center mb-6 md:mb-10">
          About habi
        </h1>

        <section className="md:flex items-center md:justify-between md:space-x-8 text-center md:text-left gradient-border">
          <div className="md:w-[60%] md:text-left px-3 my-4">
            <h2 className="text-2xl md:text-[40px] font-giloryS">
              habi has a better way
              <span className="block text-lg md:text-2xl text-secondary mt-4">
                which is modular construction and envisioning building as a
                product
              </span>
            </h2>
            <p className="text-2xl md:text-[32px] font-giloryS mt-10">
              We are a One Stop Design Centric 'BaaP' Company.
            </p>
            <p className="md:text-lg font-giloryM mt-4">
              We provide design-centric approached services that are tailored to
              meet your unique ideas, needs, desires & requirements to enhance
              your overall experience of home design & construction.
            </p>
            <p className="italic text-gray-400 mt-10 font-giloryM">
              *BaaP = Building as a Product
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-[402px] h-[324px] md:w-[324px] md:h-[484px] lg:w-[500px] lg:h-[404px]">
            <img
              src={house}
              alt="Modern House"
              className="w-[402px] h-[324px] md:w-[324px] md:h-[484px] lg:w-[500px] lg:h-[404px] "
            />
            <div
              className="absolute inset-0"
              style={{
                background: `
      linear-gradient(to right, #000000, rgba(0, 0, 0, 0) 100px),
      linear-gradient(to left, #000000, rgba(0, 0, 0, 0) 100px)
    `,
              }}
            />
          </div>
        </section>

        {/* Vision Section */}
        <section className="space-y-6 text-center mt-20 px-2 lg:px-20">
          <h2 className="text-2xl md:text-[32px] font-giloryS">Vision</h2>
          <p className="md:text-lg font-giloryM">
            We envision forging a realm where affordability, accessibility,
            sustainability, and cutting-edge design seamlessly unite to elevate
            the quality of life and foster environmental well-being,
            transcending boundaries on Earth & Beyond.
          </p>
        </section>

        {/* Mission Section */}
        <section className="space-y-6 text-center justify-center mt-10">
          <h2 className="text-2xl md:text-[32px] font-giloryS">Mission</h2>
          <ul className="flex flex-col items-center space-y-6 md:text-lg font-giloryM">
            <li className="flex gap-4">
              <img src={leaf} alt=" leaf" className="w-8" /> Sustainable Living
              Solutions
            </li>
            <li className="flex gap-4">
              <img src={palette} alt="palette" className="w-8" /> Accessible
              Design for All
            </li>
            <li className="flex gap-4">
              <img src={buildings1} alt="buildings1" className="w-8" /> Smart &
              Adaptive Spaces
            </li>
            <li className="flex gap-4">
              <img src={buildings} alt="buildings" className="w-8" /> Modular
              Centric Construction
            </li>
            <li className="flex gap-4">
              <img
                src={userspeak}
                alt="Home construction Bengaluru"
                className="w-8"
              />
              Industry Leader in Dynamic Manufacturing
            </li>
          </ul>
        </section>

        {/* Footer Cards */}
        <section className="my-20 grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-10">
          <img
            src={value1}
            alt="Home construction Bengaluru"
            className="mx-auto"
          />
          <img
            src={value2}
            alt="Home construction Bengaluru"
            className="mx-auto"
          />
          <img
            src={value3}
            alt="Home construction Bengaluru"
            className="mx-auto"
          />
          <img
            src={value4}
            alt="Home construction Bengaluru"
            className="mx-auto"
          />
        </section>
      </main>
    </div>
  );
};

export default AboutHabi;

