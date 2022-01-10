import React from "react";

import Clock from "../icons/clock";
import Ethereum from "../icons/ethereum";
import StrongText from "../strongText";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-image">
        <div className="active-state">
          <img src="icon-view.svg" alt="" />
        </div>
        <img src="image-equilibrium.jpg" alt="equilibrium" />
      </div>
      <div className="card-content">
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div>
          <div className="strong-text cyan">
            <Ethereum fill="currentColor" />
            <StrongText>0.041 ETH</StrongText>
          </div>

          <div className="strong-text">
            <Clock fill="currentColor" />
            <StrongText>3 days left</StrongText>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <img src="./image-avatar.png" alt="" />
        <p>Creation of Jules Wyvern</p>
      </div>
    </div>
  );
}
