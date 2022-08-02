import React from "react";

import "./cards.css";

const cards = ({ newUser: { name, bday, employed, income, houseNum, pc } }) => {
  if (employed === "Student") {
    return (
      <div>
        <div className="card">
          <h1>Student Card</h1>
          <p>APR: 18.9%</p>
          <div className="balance">
            <p>Balance Transfer Offer Duration: </p>
            <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Purchase Offer Duration: </p> <p className="bold"> 6 months</p>
          </div>
          <div className="balance">
            <p>Credit Available: </p> <p className="bold"> £1200</p>
          </div>
        </div>
        <div className="card">
          <h1>Anywhere Card</h1>
          <p>APR: 18.9%</p>
          <div className="balance">
            <p>Balance Transfer Offer Duration: </p>
            <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Purchase Offer Duration: </p> <p className="bold"> 6 months</p>
          </div>
          <div className="balance">
            <p>Credit Available: </p> <p className="bold"> £1200</p>
          </div>
        </div>
      </div>
    );
  }
  if (income >= 16000) {
    return (
      <div>
        <div>Liquid Card</div>
        <div className="card">
          <h1>Anywhere Card</h1>
          <p>APR: 18.9%</p>
          <div className="balance">
            <p>Balance Transfer Offer Duration: </p>
            <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Purchase Offer Duration: </p> <p className="bold"> 6 months</p>
          </div>
          <div className="balance">
            <p>Credit Available: </p> <p className="bold"> £1200</p>
          </div>
        </div>
      </div>
    );
  }
  if (employed !== "Student" && income < 16000)
    return (
      <div>
        <div className="card">
          <h1>Anywhere Card</h1>
          <p>APR: 18.9%</p>
          <div className="balance">
            <p>Balance Transfer Offer Duration: </p>
            <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Purchase Offer Duration: </p> <p className="bold"> 6 months</p>
          </div>
          <div className="balance">
            <p>Credit Available: </p> <p className="bold"> £1200</p>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <h1>Avaliable Cards</h1>
    </div>
  );
};

export default cards;
