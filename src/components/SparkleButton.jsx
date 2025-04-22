import React from "react";
import styled, { keyframes } from "styled-components";
import arrow from "../assets/images/ArrowRight.webp";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";

const SparkleButton = ({ text, isCalculator = false, onClick }) => {
  if (isCalculator) {
    return (
      <CalculatorButtonWrapper>
        <button className="button  font-gilroyS" onClick={onClick}>
          <div className="icon-wrapper">
            <Lottie
              animationData={animationData}
              loop
              className="animated-icon"
            />
          </div>
          <span className="text_button text-sm  2xl:text-3xl">{text}</span>
        </button>
      </CalculatorButtonWrapper>
    );
  }
  return (
    <StyledWrapper isBaaP={text === "BaaP"}>
      <button className="button font-giloryS">
        <div className="dots_border" />
        {text === "BaaP" ? (
          <>
            <span className="text_button text-2xl 2xl:text-3xl">{text}</span>
            <img src={arrow} alt="arrow" className="z-10" />
          </>
        ) : (
          <>
            <img src={arrow} alt="arrow" className="z-10 rotate-180" />
            <span className="text_button text-2xl 2xl:text-3xl text-center leading-tight whitespace-pre-line">
              {text}
            </span>
          </>
        )}
      </button>
    </StyledWrapper>
  );
};

export default SparkleButton;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledWrapper = styled.div`
  .button {
    --black-700: hsla(0, 0%, 30%, 1);
    --transition: 0.3s ease-in-out;

    cursor: pointer;
    position: relative;
    border-radius: ${({ isBaaP }) =>
      isBaaP ? "0 24px 24px 0" : "24px 0 0 24px"};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 24px 2rem;

    transform-origin: center;
    transform: scale(calc(1 + (var(--active, 0) * 0.1)));
    transition: transform var(--transition);
  }

  .button::before,
  .button::after,
  .dots_border {
    border-radius: ${({ isBaaP }) =>
      isBaaP ? "0 24px 24px 0" : "24px 0 0 24px"};
  }

  .button::before {
    content: "";
    background-color: var(--black-700);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: all var(--transition);
  }

  .button::after {
    content: "";
    background: linear-gradient(to top, #00eaff 0px, transparent 100%);
    background-color: #046f7a;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    opacity: var(--active, 0);
    z-index: 2;
    transition: opacity var(--transition);
  }

  .button:is(:hover, :focus-visible) {
    --active: 1;
  }

  .button:active {
    transform: scale(1);
  }

  .dots_border {
    --size_border: calc(100% + 2px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--size_border);
    height: var(--size_border);
    overflow: hidden;
    background-color: transparent;
    z-index: -10;
  }

  .dots_border::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 2rem;
    background-color: white;
    mask: linear-gradient(transparent 0%, white 120%);
    animation: ${rotate} 2s linear infinite;
  }

  .text_button {
    color: white;
    position: relative;
    z-index: 10;
  }
`;

const shine = keyframes`
  0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  `;
const CalculatorButtonWrapper = styled.div`
  .button {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: transparent;

    border: none;
    border-top-left-radius: 90px;
    border-bottom-left-radius: 90px;
    background: rgb(53, 50, 50);

    padding: 0;
    transition: all 0.4s ease;
    overflow: hidden;
    cursor: pointer;
  }

  .button:hover {
    width: 320px;
    align-items: center;
    justify-content: space-around;

    padding: 0 16px;
    background: linear-gradient(to right, #00b3b3, #008080);
  }

  .icon-wrapper {
    width: 120px;
    height: 120px;
  }

  .animated-icon {
    width: 120px;
    height: 120px;

    filter: brightness(0) saturate(100%) invert(100%) contrast(200%);
  }

  .text_button {
    display: none;
    margin-left: 12px;
    white-space: pre-line; //ensures line breaks show
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.2;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .button:hover .text_button {
    display: block;
  }
`;
