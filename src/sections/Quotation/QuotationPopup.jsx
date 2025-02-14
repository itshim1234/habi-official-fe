import React, { useEffect, useState } from "react";
import close from "../../assets/images/close.png";
import { generatePDF } from "./GeneratePdf";

function QuotationPopup({
  isVisible,
  onClose,
  quotationData,
  handleProgressiveBar,
  handleCompleted,
}) {
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
    if (!validateInput()) return;
    handleProgressiveBar(true);
    handleCompleted(false); // Reset completion status

    // Generate PDF Blob
    const pdfBlob = await generatePDF({
      name,
      phone,
      email,
      ...quotationData,
    });

    // Create FormData
    const formData = new FormData();
    formData.append("invoicePdf", pdfBlob, "quotation.pdf");
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("package", quotationData.package1);

    // Send FormData to Backend
    try {
      const response = await fetch(
        "https://sendquotationserver.onrender.com/send-pdf",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        handleCompleted(true);
        setTimeout(() => {
          handleProgressiveBar(false);
          onClose();
        }, 4000);
      } else {
        handleProgressiveBar();
        alert("Failed to send quotation.");
      }
    } catch (error) {
      handleProgressiveBar(false);

      console.error("Error sending quotation:", error);
      alert("An error occurred while sending the quotation.");
    }

    if (!isVisible) return null;
  };
  return (
    <div className="fixed bg-black/20 backdrop-blur-md z-50 flex items-center rounded-3xl font-giloryM">
      <div className="w-[90%] md:w-fit h-fit flex justify-center items-center border border-[#7c7c7c] rounded-3xl relative p-6 md:p-10">
        <button onClick={onClose} className="absolute top-2 right-2 p-2">
          <img src={close} alt="Close" className="w-4" />
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2 text-secondary font-giloryS">
            Quotation
          </h2>
          <p className="text-[#c0c0c0] text-sm text-center mb-8">
            Please complete this form to download the Detailed Quotation.
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <>
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 mt-3 text-white w-full"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={phone}
              placeholder="Phone Number"
              className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 mt-3 text-white w-full"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 mt-3 text-white w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="text-black bg-white rounded-lg px-4 py-2 mt-5 w-full"
              onClick={handleContinue}
            >
              Continue
            </button>
          </>
        </div>
      </div>
    </div>
  );
}

export default QuotationPopup;
