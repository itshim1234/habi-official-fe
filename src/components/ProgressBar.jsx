import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Completed from "./done/Completed";

function ProgressBar({ completed }) {
  const messages = [
    {
      title: "Generating Your Quotation...",
      description: "Compiling your project details into a professional report",
    },
    {
      title: "Finalizing Your Estimate...",
      description:
        "Calculating costs and preparing your quotation for download",
    },
    {
      title: "Almost There! Creating Your Quotation..",
      description: "Gathering details and formatting your cost breakdown",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!completed && index < messages.length - 1) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index, completed]);

  return (
    <div className="fixed bg-black/20 backdrop-blur-md z-50 flex border border-[#7c7c7c] rounded-3xl w-[400px] h-[400px] md:w-[458px] md:h-[350px]">
      <div className="flex flex-col items-center rounded-3xl p-10 mx-auto">
        <div className="text-center w-[100%] md:w-[90%]">
          <p className="text-secondary font-giloryS  text-2xl">
            {completed ? "Sent Successfully!" : messages[index].title}
          </p>

          <p className="text-lg text-white mt-2 font-giloryM">
            {completed ? "Check your Mail inbox" : messages[index].description}
          </p>
        </div>
        <div>{completed ? <Completed /> : <Loader />}</div>
      </div>
    </div>
  );
}

export default ProgressBar;
