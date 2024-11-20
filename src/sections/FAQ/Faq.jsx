import React, { useState, useEffect, useRef } from "react";

import downArrow from "../../assets/images/downArrow.png";
import "../../sections/CostEstimator/styles.css";

function Faq() {
  const [faqSection, setFaqSection] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  const handleFaq = (bool) => {
    setFaqSection(bool);
  };
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [faqSection]); // Update height if content changes dynamically

  const faqs = [
    {
      question: "Does habi charges an advance payment?",
      answer:
        "Yes. habi collects a booking amount of about 1% of the total home construction cost. Alongside this, we conduct digital surveys, perform soil tests, and create a floor plan.",
    },
    {
      question: "Does habi charges an advance payment?",
      answer:
        "Yes. habi collects a booking amount of about 1% of the total home construction cost. Alongside this, we conduct digital surveys, perform soil tests, and create a floor plan.",
    },
    {
      question: "Does habi charges an advance payment?",
      answer:
        "Yes. habi collects a booking amount of about 1% of the total home construction cost. Alongside this, we conduct digital surveys, perform soil tests, and create a floor plan.",
    },
    {
      question: "Does habi charges an advance payment?",
      answer:
        "Yes. habi collects a booking amount of about 1% of the total home construction cost. Alongside this, we conduct digital surveys, perform soil tests, and create a floor plan.",
    },
  ];

  return (
    <div
      className={`h-fit flex flex-col bg-black w-full gradient-border text-white`}
    >
      <div
        className={`w-full bg-black p-2 px-4 h-auto mb-2  md:px-20 lg:px-60 xl:px-[25%]  ${
          faqSection ? "pb-20" : ""
        }`}
      >
        <div>
          <div
            className="my-10 cursor-pointer"
            onClick={() => {
              handleFaq(!faqSection);
            }}
          >
            <h2 className="text-[24px] lg:text-[32px]  mb-10 text-center inline mr-2">
              FAQ's
            </h2>
            <img
              src={downArrow}
              alt=""
              className={`inline mb-2 transition-transform duration-500 ${
                faqSection ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
            style={{
              maxHeight: faqSection ? `${contentHeight}px` : "0px",
            }}
          >
            <div ref={contentRef} className="bg-black text-white space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={` text-left ${
                    index === faqs.length - 1
                      ? "border-b-0"
                      : "border-b border-[#7c7c7c] pb-5"
                  }`}
                >
                  <h3 className="text-xl font-semibold">
                    {index + 1}. {faq.question}
                  </h3>
                  <p className="mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
