import React from "react";
import styled, { keyframes } from "styled-components";
import arrow from "../assets/images/ArrowRight.webp";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import homeAnimation from "../assets/homeButtonAnimation.json";

// 360° conic-gradient border keyframes
const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }`;

const StyledWrapper = styled.div`
  .button {
    --black-700: hsla(0 0% 30% / 1);
    --border_radius: 18px;
    --transtion: 0.3s ease-in-out;
    --offset: 2px;

    cursor: pointer;
    position: relative;
    border-radius: ${({ text }) =>
      text == "BaaP" ? "0 24px 24px 0" : "24px 0 0 24px"};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    transform-origin: center;

    padding: 24px 2rem;

    transform: scale(calc(1 + (var(--active, 0) * 0.1)));

    transition: transform var(--transtion);
  }

  .button::before {
    content: "";
    border-radius: ${({ text }) =>
      text == "BaaP" ? "0 24px 24px 0" : "24px 0 0 24px"};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
    background-color: var(--black-700);

    transition: all var(--transtion);
    z-index: 0;
  }

  .button::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${({ text }) =>
      text === "BaaP" ? "0 24px 24px 0" : "24px 0 0 24px"};
    width: 100%;
    height: 100%;
    background-color: #046f7a;

    background-image: linear-gradient(to top, #00eaff 0px, transparent 100%);
    background-position: top;

    opacity: var(--active, 0);
    transition: opacity var(--transtion);
    z-index: 2;
  }

  .button:is(:hover, :focus-visible) {
    --active: 1;
  }
  .button:active {
    transform: scale(1);
  }

  .button .dots_border {
    --size_border: calc(100% + 2px);

    overflow: hidden;
    border-radius: ${({ text }) =>
      text === "BaaP" ? "0 24px 24px 0" : "24px 0 0 24px"};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: var(--size_border);
    height: var(--size_border);
    background-color: transparent;

    z-index: -10;
  }

  .button .dots_border::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left;
    transform: rotate(0deg);

    width: 100%;
    height: 2rem;
    background-color: white;

    mask: linear-gradient(transparent 0%, white 120%);
    animation: rotate1 2s linear infinite;
  }

  @keyframes rotate1 {
    to {
      transform: rotate(360deg);
    }
  }

  .button .sparkle {
    position: relative;
    z-index: 10;

    width: 1.75rem;
  }

  .button .text_button {
    position: relative;
    z-index: 10;

    background-clip: text;

    color: white;
  }
`;

const CalculatorButtonWrapper = styled.div`
  .button {
    width: 110px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: none;
    border-top-left-radius: 90px;
    border-bottom-left-radius: 90px;
    background: rgba(53, 50, 50, 0.3);
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.2);
    border-right: 0px;
    border-style: solid;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(4px);
    padding: 0 8px;
    padding-left: 40px;
    transition: all 0.1s ease;
    overflow: hidden;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.2;
    gap: 0.5rem;
    position: relative;
  }

  .text_button {
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.4s ease, transform 0.4s ease;
    white-space: nowrap;
  }

  .button:hover {
    width: 320px;
    background: linear-gradient(to right, #00b3b3, #008080);
  }

  .button:hover .text_button {
    opacity: 1;
    transform: translateX(0);
  }

  .icon-wrapper {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
  }

  .animated-icon {
    filter: brightness(0) saturate(100%) invert(100%) contrast(200%);
  }
`;

// Main SparkleButton logic
const SparkleButton = ({
  text,
  isCalculator = false,
  onClick,
  animationData: customAnimation,
}) => {
  if (isCalculator) {
    const lines = text.split("|");
    return (
      <CalculatorButtonWrapper>
        <button className="button font-gilroyS" onClick={onClick}>
          <div
            className="icon-wrapper"
            style={{
              width: customAnimation === homeAnimation ? 70 : 120,
              height: customAnimation === homeAnimation ? 70 : 120,
            }}
          >
            <Lottie
              animationData={customAnimation || animationData}
              loop
              className="animated-icon"
              style={{
                width: customAnimation === homeAnimation ? 70 : 120,
                height: customAnimation === homeAnimation ? 70 : 120,
              }}
            />
          </div>
          <span className="text_button max-w-sm overflow-hidden whitespace-nowrap">
            {lines.map((line, i) => (
              <div key={i}>{line.trim()}</div>
            ))}
          </span>
        </button>
      </CalculatorButtonWrapper>
    );
  }
  return (
  <StyledWrapper text={text}>
      <button className="button font-giloryS">
        <div className="dots_border" />
        {text === "BaaP" ? (
          <>
            <span className="text_button text-2xl 2xl:text-3xl">{text}</span>
            <img
              src={arrow}
              alt="Home construction Bengaluru"
              className={`z-10`}
            />
          </>
        ) : (
          <>
            <img
              src={arrow}
              alt="Home construction Bengaluru"
              className={`z-10 rotate-180`}
            />
            <span className="text_button text-2xl 2xl:text-3xl">{text}</span>
          </>
        )}
      </button>
    </StyledWrapper>
  );
};

export default SparkleButton;
