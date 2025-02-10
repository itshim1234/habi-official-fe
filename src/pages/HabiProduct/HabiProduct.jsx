import React, { useEffect } from "react";
import Hero from "../../sections/Baap/Hero";
import BaapWorking from "../../sections/Baap/BaapWorking";
import ComingSoon from "../../sections/Baap/ComingSoon";
import { Helmet } from "react-helmet";

function HabiProduct() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page is at the top on load
  }, []);

  return (
    <div>
      <Helmet>
        <title>Habi Product - BaaP</title>
        <meta name="description" content="Product Company" />
        <link rel="canonical" href="https://habi.one/baap" />
      </Helmet>
      <Hero />
      <BaapWorking />
      <ComingSoon />
    </div>
  );
}

export default HabiProduct;
