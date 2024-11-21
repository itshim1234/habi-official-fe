import React, { useEffect } from "react";
import Hero from "../../sections/Baap/Hero";
import BaapWorking from "../../sections/Baap/BaapWorking";
import ComingSoon from "../../sections/Baap/ComingSoon";

function HabiProduct() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page is at the top on load
  }, []);

  return (
    <div>
      <Hero />
      <BaapWorking />
      <ComingSoon />
    </div>
  );
}

export default HabiProduct;
