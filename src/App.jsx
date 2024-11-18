import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero/Hero";
import Footer from "./sections/Footer/Footer";
import Info from "./sections/Info/Info";
import Service from "./sections/habiService/Service";
import Working from "./sections/HowItWorks/Working";
import Model from "./sections/3DMobile/Model";
import ConstructionProgress from "./sections/TrackProgress/ConstructionProgress";
import Projects from "./sections/Projects/Projects";
import Testimonial from "./sections/Testimonials/Testimonials";
import CostEstimator from "./sections/CostEstimator/CostEstimator";
import Faq from "./sections/FAQ/Faq";

function App() {
  return (
    <div className="overflow-x-hidden  bg-black">
      <Hero />
      <Info />
      <Service />
      <Working />
      <ConstructionProgress />
      <Projects />
      <Testimonial />
      <CostEstimator />
      <Model />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
