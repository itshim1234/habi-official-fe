import React from "react";
import styled from "styled-components";

const Card = ({ data }) => {
  return (
    <StyledWrapper>
      <div className="myCard w-[169px] h-[208px] md:w-[195px] md:h-[220px] lg:w-[237px] lg:h-[257px]">
        <div className="innerCard">
          <div className="frontSide text-black justify-between py-6">
            <p
              className={`title  ${
                data.title == "Total"
                  ? "font-giloryB text-2xl lg:text-4xl"
                  : "font-giloryM text-lg lg:text-2xl"
              }`}
            >
              {data.title}
            </p>
            {data.percentage && (
              <p className="font-giloryS text-lg lg:text-2xl">
                {data.percentage} %
              </p>
            )}
            <p className="font-giloryB text-2xl lg:text-[32px]">
              ₹ {data.price}
            </p>
          </div>
          <div className="backSide text-left px-2 py-4 font-giloryM text-xs md:text-[14px] lg:text-[16px] space-y-1 lg:space-y-2">
            {data.items.map((item, index) => {
              return (
                <p key={index}>
                  {index + 1}
                  <span>)</span> {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .title {
    text-align: center;
    margin: 0;
  }

  .innerCard {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .myCard:hover .innerCard {
    transform: rotateY(180deg);
  }

  .frontSide,
  .backSide {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 1rem;
    box-shadow: 0 0 0.1em rgba(255, 255, 255, 0.5);
  }

  .frontSide,
  .frontSide::before {
    background: linear-gradient(43deg, #ffb969 0%, #ffb969 50%);
  }

  .backSide,
  .backSide::before {
    background-image: linear-gradient(160deg, #0fb4c3 0%, #0fb4c3 100%);
  }

  .backSide {
    transform: rotateY(180deg);
  }

  .frontSide::before,
  .backSide::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    border-radius: 1em;
    filter: blur(20px);
    animation: animate 5s linear infinite;
  }

  @keyframes animate {
    0% {
      opacity: 0.3;
    }

    80% {
      opacity: 1;
    }

    100% {
      opacity: 0.3;
    }
  }
`;

export default Card;
