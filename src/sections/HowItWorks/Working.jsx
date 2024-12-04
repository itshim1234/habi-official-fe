import React, { useState, useEffect } from "react";
import WorkingMobile from "./WorkingMobile";
import WorkingLaptop from "./WorkingLaptop";

function Working() {
  const [isMobile, setIsMobile] = useState(isMobileDevice());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <WorkingMobile /> : <WorkingLaptop />}</>;
}

function isMobileDevice() {
  return window.innerWidth <= 768; // Define your mobile breakpoint
}

export default Working;
