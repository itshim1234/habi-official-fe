import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero/Hero";
import Footer from "./sections/Footer/Footer";
import Info from "./sections/Info/Info";
import Service from "./sections/habiService/Service";
import Working from "./sections/HowItWorks/Working";
import Model from "./sections/3DMobile/Model";
import ConstructionProgress from "./sections/TrackProgress/ConstructionProgress";

function App() {
  const [scrollLocked, setScrollLocked] = useState(true);

  const handleScrollLock = (isLocked) => {
    setScrollLocked(isLocked);
    document.body.style.overflow = isLocked ? "hidden" : "";
  };

  return (
    <div className="">
      <Hero />
      <Info />
      <Service />
      <Working
        scrollLocked={scrollLocked}
        onScrollLockChange={handleScrollLock}
      />
      <ConstructionProgress />
      <Model />
      <Footer />
    </div>
  );
}

export default App;
