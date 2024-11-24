import React from "react";
import consultation from "../../assets/images/consultation.png";
import call from "../../assets/images/Call.png";
import close from "../../assets/images/close.png";

const ConsultationPopup = ({ onClose }) => {
  // Define input fields dynamically
  const inputFields = [
    { label: "Name*", placeholder: "Name", type: "text" },
    { label: "Phone No.*", placeholder: "Phone No.", type: "text" },
    { label: "Email", placeholder: "Email", type: "email" },
    { label: "Location*", placeholder: "Location", type: "text" },
  ];

  return (
    <div className="relative inset-0 flex items-center justify-center z-50 w-[340px] md:w-[770px] lg:w-[1060px] mx-auto rounded-2xl border border-[#7c7c7c]">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-1 right-1 md:right-8 md:top-8 text-white rounded-xl md:bg-gray-800 focus:outline-none p-2 z-50"
      >
        <img src={close} alt="" className="w-4" />
      </button>

      {/* Popup Content */}
      <div className="bg-black/50 backdrop-blur-lg text-white rounded-2xl p-6 flex flex-col md:flex-row w-full">
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-giloryS mb-10 text-center md:text-left">
            Connect with Our Experts
          </h2>
          <form>
            {/* Dynamically Render Input Fields */}
            {inputFields.map((field, index) => (
              <div key={index} className="mb-8">
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="text-[#c0c0c0] font-giloryM block px-3 py-2 border border-[#7c7c7c] rounded-lg bg-transparent focus:outline-none w-[94%]"
                />
              </div>
            ))}

            {/* Submit Button */}
            <button
              type="submit"
              className="block w-[94%] lg:text-lg py-2 bg-white text-black rounded-lg hover:bg-secondary focus:outline-none font-giloryM"
            >
              Submit
            </button>
          </form>

          {/* Additional Info */}
          <p className="mt-4 text-center text-xs lg:text-[14px] px-2 font-giloryM">
            If you'd prefer not to fill out the form, feel free to give us a
            call.
          </p>
          <a href="tel:9606210818">
            <p className="text-center flex justify-center mt-2 text-secondary text-2xl font-giloryS pr-3">
              <img src={call} alt="" className="mr-2 w-8" /> 9606210818
            </p>
          </a>
        </div>

        {/* Image Section - Hidden on Mobile */}
        <div className="hidden md:block w-1/2 md:h-[460px]">
          <img
            src={consultation}
            alt="Cozy Cabin in Snow"
            className="rounded-r-lg md:h-[480px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;
