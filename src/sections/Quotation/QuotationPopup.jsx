import React, { useState } from "react";
import close from "../../assets/images/close.png";
import { generatePDF } from "./GeneratePdf";
import OtpForm from "../../components/OtpForm";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

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

  const [showOtpForm, setShowOtpForm] = useState(false);

  const validateInput = () => {
    const phoneRegex = /^[6789]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if (!name.trim()) {
    //   setError("Please enter your name.");
    //   return false;
    // }
    // if (!phoneRegex.test(phone)) {
    //   setError(
    //     "Enter a valid 10-digit phone number starting with 6, 7, 8, or 9."
    //   );
    //   return false;
    // }
    // if (!emailRegex.test(email)) {
    //   setError("Please enter a valid email address.");
    //   return false;
    // }

    setError("");
    return true;
  };

  const handleContinue = () => {
    if (!validateInput()) return;
    setShowOtpForm(true); // Show OTP input first
  };

  const handleOtpSubmit = async (otp) => {
    if (otp.length !== 4) {
      setError("Please enter a valid 4-digit OTP.");
      return;
    }

    handleProgressiveBar(true);
    handleCompleted(false);

    const userData = {
      name,
      phone,
      email,
      package: quotationData.package1,
      timestamp: new Date().toISOString(),
    };

    try {
      const pdfBlob = await generatePDF({
        name,
        phone,
        email,
        ...quotationData,
      });

      const formData = new FormData();
      formData.append("invoicePdf", pdfBlob, "quotation.pdf");
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("package", quotationData.package1);

      const [emailResult, sheetResult] = await Promise.allSettled([
        fetch(`${backendUrl}/send-pdf`, {
          method: "POST",
          body: formData,
        }),
        saveToGoogleSheets(userData),
      ]);

      if (emailResult.status === "fulfilled" && emailResult.value.ok) {
        handleCompleted(true);
        setTimeout(() => {
          handleProgressiveBar(false);
          onClose();
        }, 3000);
      } else {
        setError("Failed to send quotation email.");
        handleProgressiveBar(false);
      }

      if (
        sheetResult.status === "rejected" ||
        (sheetResult.value && sheetResult.value.success === false)
      ) {
        console.warn("Email sent but failed to save to Google Sheets.");
      }
    } catch (error) {
      console.error("Error during OTP submission or PDF/email:", error);
      setError("Something went wrong. Please try again.");
      handleProgressiveBar(false);
    }
  };

  const saveToGoogleSheets = async (userData) => {
    try {
      const response = await fetch(`${backendUrl}/quotations`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error("Google Sheets save error:", error);
      return false;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bg-black/20 backdrop-blur-md z-50 flex items-center rounded-3xl font-giloryM">
      {showOtpForm ? (
        <OtpForm
          onComplete={handleOtpSubmit}
          phone={phone}
          onBack={() => setShowOtpForm(false)}
        />
      ) : (
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

            <input
              type="text"
              value={name}
              placeholder="Name"
              className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 mt-3 text-white w-full"
              onChange={(e) => setName(e.target.value)}
            />

            <div className="mt-3 w-full">
              <div className="flex">
                <div className="flex items-center px-4 border border-gray-300 border-r-0 bg-white-200 rounded-l-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                    alt="India Flag"
                    className="w-7 h-4 mr-2"
                  />
                  <span className="text-white">+91</span>
                </div>

                <input
                  type="text"
                  placeholder="00000 00000"
                  className="w-full border bg-layoutColor text-white border-gray-300 border-l-transparent rounded-r-lg py-2 px-3 focus:outline-none"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                />
              </div>
            </div>

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
          </div>
        </div>
      )}
    </div>
  );
}

export default QuotationPopup;
