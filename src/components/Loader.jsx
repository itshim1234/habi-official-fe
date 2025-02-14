import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader mt-10">
        <span className="bar1" />
        <span className="bar1" />
        <span className="bar1" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    align-items: center;
  }

  .bar1 {
    display: inline-block;
    width: 10px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    animation: scale-up4 1s linear infinite;
  }

  .bar1:nth-child(2) {
    height: 60px;
    margin: 0 5px;
    animation-delay: 0.25s;
  }

  .bar1:nth-child(3) {
    animation-delay: 0.5s;
  }

  @keyframes scale-up4 {
    20% {
      background-color: #ffff;
      transform: scaleY(1.5);
    }

    40% {
      transform: scaleY(1);
    }
  }
`;

export default Loader;
