import React, { useState } from "react";
import quotation from "../../assets/images/quotation.png";
import lock from "../../assets/images/lock.png";
import close from "../../assets/images/close.png";
import { generatePDF } from "../Quotation/GeneratePdf";

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
}) {
  const [popUp, setPopUp] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateInput = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      setError("Please enter your name.");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleContinue = async () => {
    if (validateInput()) {
      setPopUp(false);

      // Generate the PDF Blob
      const pdfBlob = await generatePDF({
        name,
        phone,
        email,
        totalSump,
        consSump,
        sumpCost,
        estimatedCost,
        floors,
        floorHeight,
        package1, // Ensure package is included
        landArea,
        landType,
        length,
        breadth,
        builtUp,
      });

      // Create a FormData object to send the PDF and user details
      const formData = new FormData();
      formData.append("invoicePdf", pdfBlob, "quotation.pdf"); // Fix key name
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("package", package1); // Ensure package is sent

      // Send the FormData to the backend
      try {
        const response = await fetch(
          "https://sendquotationserver.onrender.com/send-pdf",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          alert("Quotation sent successfully!");
        } else {
          alert("Failed to send quotation.");
        }
      } catch (error) {
        console.error("Error sending quotation:", error);
        alert("An error occurred while sending the quotation.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center relative">
      <img src={quotation} alt="" className="" />
      <div className="absolute flex flex-col justify-center items-center">
        <img src={lock} alt="locked" className="" />
        <button
          className="text-white bg-primary rounded-lg px-4 py-2 mt-3"
          onClick={() => setPopUp(!popUp)}
        >
          Download Quotation
        </button>
      </div>
      {popUp && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-fit h-fit bg-black/50 backdrop-blur-lg flex justify-center items-center z-20 border border-[#7c7c7c] rounded-3xl">
          <button
            onClick={() => setPopUp(false)}
            className="absolute top-1 right-1 md:right-4 md:top-4 text-white rounded-xl md:bg-gray-800 focus:outline-none p-2 z-50"
          >
            <img src={close} alt="Close" className="w-4" />
          </button>

          <div className="flex flex-col justify-center p-6 md:p-10">
            <h2 className="text-3xl font-bold mb-2 text-secondary">
              Quotation
            </h2>
            <p className="text-[#c0c0c0] text-sm md:px-10 mb-8">
              Please complete this form to download the Detailed Quotation.
            </p>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 mt-3 text-white md:mb-4"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              value={phone}
              placeholder="Phone Number"
              className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 mt-3 text-white md:mb-4"
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="email"
              value={email}
              placeholder="Email"
              className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 mt-3 text-white mb-8"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="text-black bg-white rounded-lg px-4 py-2 mt-3"
              onClick={handleContinue} // Trigger the PDF generation here
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuotationDownload;
