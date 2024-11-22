import React from "react";

import downArrow from "../../assets/images/downArrow.png";
import "../../sections/CostEstimator/styles.css";

function FaqExpanded() {
  const faqs = [
    {
      question: "Are approvals included in habi packages?",
      answer:
        "habi collaborates with third-party trusted partners who handle the approval process, ensuring clients enjoy a smooth and hassle-free experience from start to finish.",
    },
    {
      question: "Is a compound wall included in the package?",
      answer:
        "Not all homes require a compound wall, so we’ve made it optional. This ensures clients pay only for what they need, keeping costs fair and transparent.",
    },
    {
      question: "How long does it take to complete a G+1 or G+2 construction?",
      answer:
        "A G+1 or G+2 building typically takes about 5-6 months to complete the structural work and an additional 2 months for finishing touches. In total, the construction process is completed within 8-9 months.",
    },
    {
      question: "Does habi offer loans?",
      answer:
        "habi facilitates the loan approval process by assisting clients with the necessary documentation. Additionally, we’ve partnered with select banks and NBFCs to provide competitive interest rates, ensuring a smooth financing experience.",
    },
    {
      question: "What are super built-up area, built-up area, and carpet area?",
      answer:
        "Carpet Area is the total usable area inside the house, essentially the space you can cover with a carpet. It excludes balconies and utility areas but includes the space occupied by internal walls. Built-up Area includes the carpet area plus the area covered by balconies, terraces, and other utility spaces. Super Built-up Area is the total of the built-up area plus the proportionate share of common spaces like the lobby, staircase, elevator, shafts, and clubhouse.",
    },
    {
      question: "Does habi require an advance payment?",
      answer:
        "Yes, habi collects a booking amount of approximately 1% of the total home construction cost. This advance covers initial steps such as conducting digital surveys, performing soil tests, and creating a detailed floor plan.",
    },
    {
      question: "Why aren’t steel and concrete lofts included?",
      answer:
        "Steel and concrete lofts are considered outdated in modern aesthetics, which is why they are not included by default. However, if a client prefers them, we are happy to accommodate their request.",
    },
    {
      question: "How many design iterations are allowed?",
      answer:
        "The package includes 3 design iterations, allowing for flexible customization to ensure the perfect fit for your vision.",
    },
    {
      question: "How do I get updates about the site?",
      answer:
        "We assign a dedicated site civil engineer to oversee your project, and our app provides real-time updates with live footage, keeping you informed every step of the way.",
    },
    {
      question: "Can I make design changes while construction?",
      answer:
        "Yes, we’re open to changes; however, we recommend keeping them to a minimum to ensure timely completion and avoid unnecessary cost escalations.",
    },
    {
      question: "Are the designs pre-planned or freshly made?",
      answer:
        "Every design from habi is thoughtfully crafted to suit both the site conditions and the client's unique preferences. Our designs are fresh, innovative, and tailored to create the perfect space.",
    },
    {
      question:
        "Can I change materials as per my choice even while the construction is in progress?",
      answer:
        "Yes, changes can be accommodated, though they may lead to an increase in project costs. We’ll ensure the process remains smooth while meeting your requirements.",
    },
    {
      question:
        "Can I change materials as per my choice apart from the selected package?",
      answer:
        "Yes, you can choose materials outside the package, and we’ll provide a detailed BOQ to ensure complete transparency in the quotation.",
    },
    {
      question: "What is the warranty provided by habi?",
      answer:
        "Construction Warranty: 1 year. Structural Warranty: 25 years. AMC: 1 year from the date of handover.",
    },
    {
      question: "Who takes care of the quality on-site?",
      answer:
        "A dedicated Site Civil Engineer oversees all quality parameters throughout construction, ensuring top-notch standards with over 100+ quality checks in place.",
    },
    {
      question: "What makes habi different from other construction companies?",
      answer:
        "habi stands out with its tech-driven approach, direct management (no subcontracting), and rigorous quality checks. Clients enjoy app-based daily updates and real-time live footage for full transparency throughout the project.",
    },
    {
      question: "Are lifts included in the package?",
      answer:
        "Lifts are not included by default, but we can easily add them to the BOQ upon request, ensuring a customized solution for your needs.",
    },
    {
      question: "What are the quality checks that you perform on the site?",
      answer: "100+ Quality checks.",
    },
    {
      question:
        "Does habi include the interior with the construction and provide the complete package?",
      answer:
        "Some packages include interiors, while others don’t, but we can always add them based on the customer’s request for a fully personalized experience.",
    },
    {
      question:
        "What if the prices of the materials increase when the project is ongoing? Would there be a price escalation?",
      answer:
        "Our pricing is securely locked in on stamp paper, ensuring stability in most cases. Any price adjustments due to unforeseen circumstances will be transparently communicated and are only applicable in exceptional situations.",
    },
  ];

  return (
    <div
      className={`h-fit flex flex-col bg-black w-full text-white justify-center items-center`}
    >
      <div
        className={`w-full bg-black p-2 px-4 h-auto mb-2 md:px-20 lg:px-40 2xl:px-[15%]  `}
      >
        <div className="my-10 cursor-pointer flex">
          <h2 className="text-[24px] lg:text-[32px] mx-auto mb-10">FAQ's</h2>
        </div>

        <div className="bg-black text-white space-y-4">
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
  );
}

export default FaqExpanded;
