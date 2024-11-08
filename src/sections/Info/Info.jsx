import React, { useEffect, useState } from "react";
import "./info.css";
function Info() {
  const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="flex justify-center items-center h-screen">
      <div className="container mt-10">
        <div>
          <h1 className="text-[48px] text-white font-larken-bold mb-20">
            Why habi
          </h1>
        </div>
        <div className="hero-circle">
          <div className="inner-text">{texts[currentIndex]}</div>
          <div
            className="hero-rotate"
            style={{ transform: `rotate(${-90 * currentIndex}deg)` }}
          >
            <div className="planet">
              <img
                src="https://images.unsplash.com/photo-1465414829459-d228b58caf6e?ixlib=rb-0.3.5&q=80&auto=format&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=7ab1744fe016fb39feb2972244246359"
                alt=""
              />
            </div>
            <div className="planet">
              <img
                src="https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?ixlib=rb-0.3.5&q=80&auto=format&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=86dc2dcb74588b338dfbb15d959c5037"
                alt=""
              />
            </div>
            <div className="planet">
              <img
                src="https://images.unsplash.com/photo-1484402628941-0bb40fc029e7?ixlib=rb-0.3.5&q=80&auto=format&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=6237e62a10fa079d99b088b0db0144ac"
                alt=""
              />
            </div>
            <div className="planet">
              <img
                src="https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?ixlib=rb-0.3.5&q=80&auto=format&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=882e851a008e83b7a80d05bdc96aa817"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info;
