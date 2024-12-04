import React from "react";
import styled from "styled-components";
import arrow from "../assets/images/ArrowRight.png";

const SparkleButton = ({ text }) => {
  return (
    <StyledWrapper text={text}>
      <button className="button font-giloryS">
        <div className="dots_border" />
        {text === "BaaP" ? (
          <>
            <span className="text_button text-2xl 2xl:text-3xl">{text}</span>
            <img src={arrow} alt="" className={`z-10`} />
          </>
        ) : (
          <>
            <img src={arrow} alt="" className={`z-10 rotate-180`} />
            <span className="text_button text-2xl 2xl:text-3xl">{text}</span>
          </>
        )}
      </button>
    </StyledWrapper>
  );
};

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

export default SparkleButton;
