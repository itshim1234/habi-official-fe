import React, { useState } from "react";
import consultation from "../../assets/images/consultation.webp";
import call from "../../assets/images/Call.webp";
import close from "../../assets/images/close.webp";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ConsultationPopup = ({ onClose }) => {
  const inputFields = [
    { label: "Name*", placeholder: "Name", type: "text", key: "name" },
    {
      label: "Phone No.*",
      placeholder: "Phone No.",
      type: "text",
      key: "phone",
    },
    { label: "Email", placeholder: "Email", type: "email", key: "email" },
    {
      label: "Location*",
      placeholder: "Location",
      type: "text",
      key: "location",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const phoneRegex = /^[6789]\d{9}$/;
    const emailRegex =
      /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-zA-Z0-9._%+-]+@gmail\.com$/;

    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!phoneRegex.test(formData.phone)) {
      errors.phone =
        "Enter a valid 10-digit phone number starting with 6, 7, 8, or 9.";
    }

    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid Gmail address.";
    }

    if (!formData.location.trim()) {
      errors.location = "Please enter your location.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`${backendUrl}/consultations/respond`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          location: "",
        });
        setFormErrors({});
        setTimeout(() => {
          onClose();
        }, 4000);
      } else {
        throw new Error("Failed to submit the form.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setMessage("");
      }, 2600);
    }
  };

  return (
    <div className="relative inset-0 flex items-center justify-center z-50 w-[340px] md:w-[770px] lg:w-[1060px] mx-auto rounded-2xl border border-[#7c7c7c]">
      <button
        onClick={onClose}
        className="absolute top-1 right-1 md:right-8 md:top-8 text-white rounded-xl md:bg-gray-800 focus:outline-none p-2 z-50"
      >
        <img src={close} alt="Close" className="w-4" />
      </button>

      <div className="bg-black/50 backdrop-blur-lg text-white rounded-2xl p-6 flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-giloryS mb-10 text-center md:text-left">
            Connect with Our Experts
          </h2>
          <form onSubmit={handleSubmit}>
            {inputFields.map((field, index) => (
              <div key={index} className="mb-4">
                <input
                  type={field.type}
                  name={field.key}
                  placeholder={field.placeholder}
                  value={formData[field.key]}
                  onChange={handleInputChange}
                  className={`text-[#c0c0c0] font-giloryM block px-3 py-2 border rounded-lg bg-transparent focus:outline-none w-[94%] ${
                    formErrors[field.key]
                      ? "border-red-500"
                      : "border-[#7c7c7c]"
                  }`}
                />
                {formErrors[field.key] && (
                  <p className="text-red-500 text-xs mt-1 pl-1 font-giloryM">
                    {formErrors[field.key]}
                  </p>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`block w-[94%] lg:text-lg py-2 ${
                isSubmitting ? "bg-gray-400" : "bg-white"
              } text-black rounded-lg hover:bg-secondary focus:outline-none font-giloryM`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-xs lg:text-[18px] text-green-500">
              {message}
            </p>
          )}

          <p className="mt-4 text-center text-xs lg:text-[14px] px-2 font-giloryM">
            If you'd prefer not to fill out the form, feel free to give us a
            call.
          </p>
          <a href="tel:9606210818">
            <p className="text-center flex justify-center mt-2 text-secondary text-2xl font-giloryS pr-3">
              <img src={call} alt="Call" className="mr-2 w-8" />
              9606210818
            </p>
          </a>
        </div>

        <div className="hidden md:block w-1/2 md:h-[460px]">
          <img
            src={consultation}
            alt="Consultation"
            className="rounded-r-lg md:h-[480px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;
