import React from "react";
import Logocomponent from "./saraswatiilllust.svg";
import "./content.css";
import Sarasrev from "./sarasrev1.svg";

const Content = () => {
  return (
    <>
      <div className="container-content">
        <div className="logo-content">
          <img src={Sarasrev} />
        </div>

        <div className="main-content">
          <h1>Saraswati</h1>
          <p>The simple way to create Form and Survey</p>
          <a href="/">
            <button>GET START</button>
          </a>
        </div>
      </div>

      <div className="after-content">
        <h3>"Try The New Experience In Gathering Information"</h3>
        <p>Create engagements, inspire performance, and achieve solutions.</p>
      </div>
    </>
  );
};

export default Content;
