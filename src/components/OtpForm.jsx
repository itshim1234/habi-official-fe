import React, { useEffect, useState, useRef } from "react";

const OTP_DIGITS = 4; // Change this to the number of digits in your OTP

const OtpForm = ({ onComplete, phone, onBack }) => {
  const [inputArr, setInputArr] = React.useState(
    new Array(OTP_DIGITS).fill("")
  );

  const [value, setValue] = React.useState("");

  //stor the reference of inout bnoxe
  const refArr = useRef([]);

  const handleOnchange = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.trim(); // remove leading and trailing spaces
    console.log("values", value);

    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);

    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const onKeyDownHandler = (e, index) => {
    //if my current input is empty then focus on previous input

    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  return (
    <div className="w-[458px] h-[408px] border border-red-500  flex  justify-center p-4">
      <div className="w-full max-w-md ">
        <div className=" text-center mt-4">
          <h1 className=" text-secondary font-giloryS font-weight-bold text-4xl text-center leading-8 ">
            Verify OTP
          </h1>
          <p className="text-sm text-gray-300 mt-3">
            Enter OTP sent to <span>9090909090</span> via sms
          </p>
        </div>
        <div className="  flex flex-col  item-center mt-8 ">
          <h2 className=" font-Poppins text-[18px] leading-4 mb-2">
            Enter OTP
          </h2>
          <div className="flex gap-2 justify-between">
            {inputArr.map((input, index) => {
              return (
                <input
                  className="w-[78px] h-[57px] border border-customGray rounded-[15px] focus:#F8F8FF"
                  type="text"
                  key={index}
                  value={inputArr[index]}
                  ref={(input) => (refArr.current[index] = input)}
                  onChange={(e) => handleOnchange(e.target.value, index)}
                  onKeyDown={(e) => onKeyDownHandler(e, index)}
                />
              );
            })}
          </div>

          <div className="flex justify-between items-center mt-8">
            <p>
              Did'nt receive OTP? <button>Resend </button>
            </p>
            <div className="text-gray-300">30</div>
          </div>

          <button className="bg-#F8F8FF">Verify and Download </button>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
