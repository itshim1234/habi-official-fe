import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero/Hero";
import Footer from "./sections/Footer/Footer";
import Info from "./sections/Info/Info";
import Service from "./sections/Service/Service";
function App() {
  const [product, setProduct] = useState(false);
  const handleProduct = () => {
    setProduct(!product);
  };
  return (
    <div className="w-full xl:max-w-screen-xl xl:mx-auto">
      <Hero />
      <Info />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
