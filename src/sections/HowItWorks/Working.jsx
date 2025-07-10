import React, { useState, useEffect } from "react";
import WorkingMobile from "./WorkingMobile";
import WorkingLaptop from "./WorkingLaptop";

const Working = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <WorkingMobile /> : <WorkingLaptop />;
};

export default Working;
