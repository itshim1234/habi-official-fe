import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero/Hero";
import Footer from "./sections/Footer/Footer";
import Info from "./sections/Info/Info";
import Service from "./sections/habiService/Service";
import Working from "./sections/HowItWorks/Working";
import Model from "./sections/3DMobile/Model";

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
      <Model />
      <Footer />
    </div>
  );
}

export default App;
