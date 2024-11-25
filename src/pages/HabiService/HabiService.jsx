import React, { useState, useEffect, useRef } from "react";
import Hero from "../../sections/Hero/Hero";
import Info from "../../sections/Info/Info";
import Service from "../../sections/habiService/Service";
import Working from "../../sections/HowItWorks/Working";
import Model from "../../sections/3DMobile/Model";
import ConstructionProgress from "../../sections/TrackProgress/ConstructionProgress";
import Projects from "../../sections/Projects/Projects";
import CostEstimator from "../../sections/CostEstimator/CostEstimator";
import Faq from "../../sections/FAQ/Faq";
import Baap from "../../sections/Baap/Baap";
import Testimonial from "../../sections/Testimonials/Testimonial";
import "./style.css";

function HabiService() {
  const [isServiceView, setIsServiceView] = useState(true);
  const [animation, setAnimation] = useState("");

  const projectsRef = useRef(null); // Create a ref for the Projects component

  const toggleView = () => {
    // Set the animation based on the current view
    setAnimation(isServiceView ? "slide-out" : "slide-in");
    // Wait for the animation to finish before toggling the view
    setTimeout(() => {
      setIsServiceView((prevState) => !prevState);
      setAnimation(""); // Reset animation class after transition
    }, 300); // Match this duration with CSS
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <div>
      <Hero scrollToProjects={scrollToProjects} />
      <Info />
      <div className={`content-container ${animation}`}>
        {isServiceView ? (
          <>
            <Service toggleView={toggleView} />
            <Working />
            <ConstructionProgress />
            <div ref={projectsRef}>
              <Projects />
            </div>
            <Testimonial />
            <CostEstimator />
            <Model />
            <Faq />
          </>
        ) : (
          <Baap toggleView={toggleView} />
        )}
      </div>
    </div>
  );
}

export default HabiService;
