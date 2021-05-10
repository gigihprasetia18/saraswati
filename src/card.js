import React from "react";
import "./card.css";
import Enjoy from "./enjoy.svg";
import Love from "./love.svg";
import Audience from "./audience.svg";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card-deck">
          <div className="card-logo">
            <img src={Enjoy} />
          </div>
          <div className="card-content">
            <h2>"Enjoying Your Research Experience."</h2>
            <p>hai</p>
          </div>
        </div>

        <div className="card-deck">
          <div className="card-logo">
            <img src={Love} />
          </div>
          <div className="card-content">
            <h2>"Dedicated For Those Who Love To Learn."</h2>
            <p>hai</p>
          </div>
        </div>

        <div className="card-deck">
          <div className="card-logo">
            <img src={Audience} />
          </div>
          <div className="card-content">
            <h2>"Its Not a Tool,Its You Talking With Your Audience."</h2>
            <p>hai</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
