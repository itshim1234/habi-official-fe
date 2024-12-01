import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader z-20" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    width: 0;
    height: 4.8px;
    display: inline-block;
    position: absolute;

    background: #ffffff;
    box-sizing: border-box;
    animation: animFw 15s linear infinite; /* 14s duration and infinite loop */
  }

  .loader::after,
  .loader::before {
    content: "";
    width: 5px;
    height: 1px;
    background: #fff;
    position: absolute;
    top: 9px;
    right: -2px;
    opacity: 0;
    transform: rotate(-45deg) translateX(0px);
    box-sizing: border-box;
    animation: coli1 0.3s linear infinite;
  }

  .loader::before {
    top: -4px;
    transform: rotate(45deg);
    animation: coli2 0.3s linear infinite;
  }

  @keyframes animFw {
    0% {
      left: 0; /* Starts at the left */
      width: 0; /* Initial width */
    }
    25% {
      left: 0; /* Starts at the left */
      width: 25%; /* Initial width */
    }
    50% {
      left: 0; /* Starts at the left */
      width: 50%; /* Initial width */
    }
    75% {
      left: 0; /* Starts at the left */
      width: 75%; /* Initial width */
    }
    100% {
      left: 0; /* Remains aligned to the left */
      width: 100%; /* Expands to fill the container */
    }
  }

  @keyframes coli1 {
    0% {
      transform: rotate(-45deg) translateX(0px);
      opacity: 0.7;
    }
    100% {
      transform: rotate(-45deg) translateX(-45px);
      opacity: 0;
    }
  }

  @keyframes coli2 {
    0% {
      transform: rotate(45deg) translateX(0px);
      opacity: 1;
    }
    100% {
      transform: rotate(45deg) translateX(-45px);
      opacity: 0.7;
    }
  }
`;

export default Loader;
