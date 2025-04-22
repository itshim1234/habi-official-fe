import React, { useEffect, useState } from "react";
import "./info.css";
import design from "../../assets/images/design.webp";
import time from "../../assets/images/time.webp";
import quality from "../../assets/images/quality.webp";
import manage from "../../assets/images/manage.webp";

function Info() {
  const texts = ["Design", "Manage", "Quality", "Time"];
  const desc = [
    'We design homes for practical, modern living. We focus on creating fully functional spaces with plenty of storage and <span class="highlight"> energy-efficient </span> features, all thoughtfully planned to make life more <span class="highlight">comfortable</span> and convenient.',
    '<span class="highlight">Hassle-free</span> construction with our expertise in Project Management Consultancy <span class="highlight">(PMC)</span>. From start to finish, we handle all details to keep projects smooth and stress-free for you.',
    'We perform <span class="highlight">quality checks</span> at every stage of construction to ensure top standards in our homes. With <span class="highlight">careful craftsmanship</span>, we build durable, comfortable spaces you can rely on.',
    'Our goal is to deliver efficient, timely results without compromising on <span class="highlight">quality</span>. By streamlining processes and managing resources <span class="highlight">carefully</span>, we ensure projects stay on schedule and meet client expectations.',
  ];
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000); // Change interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center w-full 2xl:h-[700px]">
      <div className="container min-w-full h-[500px] md:h-[700px] lg:h-[650px] xl:h-[650px] 2xl:h-[800px]">
        <div>
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] text-white font-giloryB mt-10 md:mb-10 lg:mb-56 2xl:mb-[390px] text-center justify-center">
            Why habi
          </h1>
        </div>
        <div className="hero-circle">
          <div className="inner-text top-[33%] md:top-[28%] lg:top-[20%] xl:top-[18%] 2xl:top-[13%]">
            <div>
              <p className="font-giloryS text-[24px] md:text-[32px] mb-[8px] 2xl:mb-6">
                {texts[currentIndex]}
              </p>
              <p
                className="font-giloryM text-[16px] md:text-[18px] 2xl:text-2xl px-8 md:px-4 2xl:px-0"
                dangerouslySetInnerHTML={{ __html: desc[currentIndex] }}
              ></p>
            </div>
          </div>
          <div
            className="hero-rotate"
            style={{ transform: `rotate(${-90 * currentIndex}deg)` }}
          >
            <div className="planet">
              <img
                src={design}
                loading="lazy"
                alt="House construction Bengaluru"
              />
            </div>
            <div className="planet">
              <img
                src={manage}
                loading="lazy"
                alt="Home construction Bengaluru"
              />
            </div>
            <div className="planet">
              <img
                src={quality}
                loading="lazy"
                alt="Home construction Bengaluru"
              />
            </div>
            <div className="planet">
              <img
                src={time}
                loading="lazy"
                alt="House construction Bengaluru"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info;
