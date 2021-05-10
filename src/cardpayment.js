import React from "react";
import "./cardpayment.css";

const Payment = () => {
  return (
    <>
      <div className="title-payment">
        <h1>Choose from our most popular plans</h1>
      </div>

      <div className="container1-payment">
        <div className="card-payment green">
          <div className="title-card">
            <h1>Silver Payment</h1>
          </div>
          <div className="idr-card">
            <p>IDR 55.000 / Month</p>
          </div>

          <div className="letter-card ">
            <p>
              Our best team features to launch advanced surveys and analyze
              results quickly.
            </p>
            <a>
              <button>GET</button>
            </a>
          </div>
        </div>
        <div className="card-payment blue">
          <div className="title-card">
            <h1>Gold Payment</h1>
          </div>
          <div className="idr-card">
            <p>IDR 100.000 / Month</p>
          </div>

          <div className="letter-card">
            <p>
              Our best team features to launch advanced surveys and analyze
              results quickly.
            </p>
            <a>
              <button>GET</button>
            </a>
          </div>
        </div>
        <div className="card-payment red">
          <div className="title-card">
            <h1>Premium Payment</h1>
          </div>
          <div className="idr-card">
            <p>IDR 155.000 / Month</p>
          </div>

          <div className="letter-card premium">
            <p>
              Our best team features to launch advanced surveys and analyze
              results quickly.
            </p>
            <a href="/">
              <button>GET</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
