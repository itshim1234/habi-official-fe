import React from "react";
import quotation from "../../assets/images/quotation.png";
import lock from "../../assets/images/lock.png";

function QuotationDownload({
  totalSump,
  consSump,
  sumpCost,
  estimatedCost,
  floors,
  floorHeight,
  package1,
  landArea,
  landType,
  length,
  breadth,
  builtUp,
  toggleQuotationPopup, // Function passed from parent
}) {
  const handleContinue = () => {
    toggleQuotationPopup({
      totalSump,
      consSump,
      sumpCost,
      estimatedCost,
      floors,
      floorHeight,
      package1,
      landArea,
      landType,
      length,
      breadth,
      builtUp,
    });
  };

  return (
    <div className="flex justify-center items-center relative">
      <img src={quotation} alt="Quotation" />
      <div className="absolute flex flex-col justify-center items-center">
        <img src={lock} alt="Locked" />
        <button
          className="text-white bg-primary rounded-lg px-4 py-2 mt-3"
          onClick={handleContinue}
        >
          Download Quotation
        </button>
      </div>
    </div>
  );
}

export default QuotationDownload;
