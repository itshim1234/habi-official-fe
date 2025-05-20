import React, { useState, useEffect } from "react";
import SparkleButton from "./SparkleButton";
import styled from "styled-components";

const CalculatorButton = ({ isAppLoaded, className, onClickCalculator }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsVisible(true);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <ButtonWrapper isVisible={isVisible}>
      <div className={className}>
        <SparkleButton
          onClick={onClickCalculator}
          text={"Construction | Cost Calculator"}
          isCalculator={true}
        />
      </div>
    </ButtonWrapper>
  );
};

export default CalculatorButton;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 60px;
  right: ${({ isVisible }) => (isVisible ? "0px" : "-300px")};

  transition: right 1s ease;
  z-index: 100;
`;
