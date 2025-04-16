import React, { useEffect, useState, useRef } from "react";

const OTP_DIGITS = 4; // Change this to the number of digits in your OTP

const OtpForm = () => {
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
    <div
      className="width-[458px] height-[408px] border-1 background-[ #00000040];
"
    >
      <div className="flex flex-col ">
        <h1 className="font-giloryS text-fuchsia-600 font-weight-bold text-4xl text-center mt-10 mb-10 leading-8 ">
          Verify OTP
        </h1>
      </div>

      {inputArr.map((input, index) => {
        return (
          <input
            className="otp-input"
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
  );
};

export default OtpForm;
