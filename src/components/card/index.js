import React from "react";

import styled from "styled-components";

import Clock from "../icons/clock";
import Ethereum from "../icons/ethereum";

import { StrongTextWrapper } from "../StrongTextWrapper";

export default function Card() {
  return (
    <Wrapper className="card-container">
      <ImgWrapper>
        <div className="active-state">
          <img src="icon-view.svg" alt="" />
        </div>
        <img src="image-equilibrium.jpg" alt="equilibrium" />
      </ImgWrapper>
      <Content>
        <Title>Equilibrium #3429</Title>
        <Paragraph>
          Our Equilibrium collection promotes balance and calm.
        </Paragraph>
        <div>
          <StrongTextWrapper isCyan>
            <Ethereum fill="currentColor" />
            0.041 ETH
          </StrongTextWrapper>

          <StrongTextWrapper>
            <Clock fill="currentColor" />3 days left
          </StrongTextWrapper>
        </div>
      </Content>

      <CardFooter>
        <img src="./image-avatar.png" alt="" />
        <p>Creation of Jules Wyvern</p>
      </CardFooter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  background-color: ${(props) => props.theme.cardBG};
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); */

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (min-width: 375px) {
    width: 350px;
  }
`;

const ImgWrapper = styled.div`
  position: relative;

  .active-state {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: none;
    place-items: center;
    background-color: ${(props) => props.theme.cyanVariant};
    border-radius: 8px;
  }

  .active-state img {
    width: 50px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }

  &:hover {
    cursor: pointer;

    & .active-state {
      display: grid;
    }
  }
`;

const Content = styled.div`
  padding-bottom: 20px;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 15px;
  padding: 0;
`;

const Paragraph = styled.p`
  font-weight: 400;
  margin: 20;
  padding: 0;
  color: ${(props) => props.theme.white};
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  border-top: 3px solid ${(props) => props.theme.line};
  padding-top: 8px;

  & img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border: 2px solid ${(props) => props.theme.white};
    border-radius: 50%;
  }
`;
