import React, { useState, useEffect, useRef } from "react";

function Working() {
  const [animationProgress, setAnimationProgress] = useState(0);
  const thirdSectionRef = useRef(null);

  return (
    <div className="flex flex-col justify-center text-center bg-black text-white relative h-screen">
      {/* Background iframe */}
      <iframe
        src="https://my.spline.design/gitnesssplinetest-73744034a060a8a69a38b8355df2a261/"
        width="100%"
        height="100%"
        className="absolute"
      ></iframe>
    </div>
  );
}

export default Working;
