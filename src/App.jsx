import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero/Hero";
function App() {
  const [product, setProduct] = useState(false);
  const handleProduct = () => {
    setProduct(!product);
  };
  return (
    <div className="w-full px-4 xl:max-w-screen-xl xl:mx-auto flex justify-center">
      <Hero />
    </div>
  );
}

export default App;
