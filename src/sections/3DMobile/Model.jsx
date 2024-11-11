import React from "react";

function Model() {
  return (
    <div className="flex flex-col justify-center text-center bg-black text-white items-center w-full ">
      <hr className="bg-[#f8f8ff] p-0 m-0" />

      <p className="text-[48px] mt-8">
        Your dream home awaits. Ready to begin?
      </p>
      <iframe
        src="https://my.spline.design/dynamiciphonemockup-45622d0e18cc93aee1ba379284bb9d10/"
        loading="lazy"
        className="w-full"
        style={{ height: `calc(100vh - 150px)` }}
      ></iframe>
    </div>
  );
}

export default Model;
