import React from "react";
import consultation from "../../assets/images/consultation.png";

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
        className="absolute right-0 top-0 text-white rounded-xl hover:bg-gray-800 focus:outline-none p-2 z-50"
      >
        X
      </button>

      {/* Popup Content */}
      <div className="bg-black/20 backdrop-blur-lg text-white rounded-2xl p-6 flex flex-col md:flex-row w-full">
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-10 text-center md:text-left">
            Connect with Our Experts
          </h2>
          <form>
            {/* Dynamically Render Input Fields */}
            {inputFields.map((field, index) => (
              <div key={index} className="relative mb-8">
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="text-white block px-3 py-2 border border-[#c0c0c0] rounded-lg bg-transparent focus:outline-none w-[94%]"
                />
              </div>
            ))}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[94%] py-2 bg-white text-black rounded-lg hover:bg-yellow-600 focus:outline-none"
            >
              Submit
            </button>
          </form>

          {/* Additional Info */}
          <p className="mt-4 text-center text-sm px-2">
            If you'd prefer not to fill out the form, feel free to give us a
            call.
          </p>
          <p className="text-center mt-2 text-yellow-500 font-semibold pr-3">
            📞 9606210818
          </p>
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
