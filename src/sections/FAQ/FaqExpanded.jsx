import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import arrow from "../../assets/images/ArrowRight.webp";
import "../../sections/CostEstimator/styles.css";
import faq from "../../assets/Faqs/faq";
import { useNavigate } from "react-router-dom";

function FaqExpanded() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page is at the top on load
  }, []);
  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div
      className={`h-fit flex flex-col bg-black w-full text-white justify-center items-center font-giloryS`}
    >
      <Helmet>
        <title>FAQ's</title>
        <meta
          name="description"
          content="Calculate Cost of the total cost to building a new house"
        />
        <link rel="canonical" href="https://habi.one/faq" />
      </Helmet>
      <div
        className="absolute top-5 md:top-10 right-5 md:right-10 z-10 cursor-pointer"
        onClick={handleGoBack}
      >
        <img
          src={arrow}
          alt="Logo"
          className="inline rotate-180 pt-0.5 mr-1 mb-1"
        />
        <p className="inline border-b pb-1 md:text-2xl font-giloryS">Back</p>
      </div>
      <div
        className={`w-full bg-black p-2 px-4 h-auto mb-2 md:px-20 lg:px-40 2xl:px-[15%]  `}
      >
        <div className="mb-10 mt-20 md:mt-20 cursor-pointer flex">
          <h2 className="text-[24px] lg:text-[32px] mx-auto mb-10">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="bg-black text-white space-y-4">
          {faq.map((faq, index) => (
            <div
              key={index}
              className={` text-left ${
                index === faq.length - 1
                  ? "border-b-0"
                  : "border-b border-[#7c7c7c] pb-5"
              }`}
            >
              <h3 className="text-xl font-semibold">
                {index + 1}. {faq.question}
              </h3>
              <p
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqExpanded;

