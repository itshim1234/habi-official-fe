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

function App() {
  const [scrollLocked, setScrollLocked] = useState();

  const handleScrollLock = (isLocked) => {
    setScrollLocked(isLocked);
  };

  return (
    <div className="overflow-x-hidden bg-black">
      <Hero />
      <Info />
      <Service />
      <Working
        scrollLocked={scrollLocked}
        onScrollLockChange={handleScrollLock}
      />
      <ConstructionProgress />
      <Projects />
      <Testimonial />

      <Model />
      <Footer />
    </div>
  );
}

export default App;
