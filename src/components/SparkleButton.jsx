import React from "react";
import styled, { keyframes } from "styled-components";
import arrow from "../assets/images/ArrowRight.png";

const SparkleButton = ({ text, isCalculator = false, onClick }) => {
  if (isCalculator) {
    return (
      <CalculatorButtonWrapper>
        <button className="button font-giloryS " onClick={onClick}>
          <div className="dots_border" />
          <span className="text_button text-sm 2xl:text-3xl text-center leading-tight whitespace-pre-line">
            {text}
          </span>
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

// Separate styled wrapper for the calculator button
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
    --transition: 0.3s ease-in-out;
    --active: 0;

    cursor: pointer;
    position: relative;
    border-radius: 24px;
    padding: 24px 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(0.75rem, 1.2vw, 1rem);
    gap: 0.5rem;
    transform: scale(calc(1 + (var(--active, 0) * 0.1)));
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: transform var(--transition);
  }

  .button:is(:hover, :focus-visible) {
    --active: 1;
  }

  .button::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    border-radius: 24px;
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
    border-radius: 24px;
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

  .dots_border {
    display: none; /* Disabled for calculator button */
  }
  .button:hover {
    animation: none;
    background: none;
    -webkit-text-fill-color: white;
  }

  .text_button {
    background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shine} 3s linear infinite;
    z-index: 10;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 24px;
  }

  .button:hover .text_button {
    animation: none;
    background: none;
    -webkit-text-fill-color: white;
  }
`;
