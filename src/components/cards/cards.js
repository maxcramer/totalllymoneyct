import React from "react";

import "./cards.css";

const cards = ({ newUser: { name, bday, employed, income, houseNum, pc } }) => {
  if (employed === "Student" && income > 16000) {
    return (
      <div>
        <div className="card">
          <h1>Liquid Card</h1>
          <p>APR: 33.9%</p>
          <div className="balance">
            <p>Balance Transfer Offer Duration: </p>
            <p className="bold"> 12 months</p>
          </div>
          <div className="balance">
            <p>Purchase Offer Duration: </p> <p className="bold"> 6 months</p>
          </div>
          <div className="balance">
            <p>Credit Available: </p> <p className="bold"> £3000</p>
          </div>
        </div>
        <div className="card">
          <h1>Anywhere Card</h1>
          <p>APR: 33.9%</p>
          <div className="balance">
            <p>Balance Transfer Offer Duration: </p>
            <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Purchase Offer Duration: </p> <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Credit Available: </p> <p className="bold"> £300</p>
          </div>
        </div>
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
        <h3>Total Credit: £4500</h3>
      </div>
    );
  }
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
          <p>APR: 33.9%</p>
          <div className="balance">
            <p>Balance Transfer Offer Duration: </p>
            <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Purchase Offer Duration: </p> <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Credit Available: </p> <p className="bold"> £300</p>
          </div>
        </div>
        <h3>Total Credit: £1500</h3>
      </div>
    );
  }
  if (income >= 16000) {
    return (
      <div>
        <div className="card">
          <h1>Liquid Card</h1>
          <p>APR: 33.9%</p>
          <div className="balance">
            <p>Balance Transfer Offer Duration: </p>
            <p className="bold"> 12 months</p>
          </div>
          <div className="balance">
            <p>Purchase Offer Duration: </p> <p className="bold"> 6 months</p>
          </div>
          <div className="balance">
            <p>Credit Available: </p> <p className="bold"> £3000</p>
          </div>
        </div>
        <div className="card">
          <h1>Anywhere Card</h1>
          <p>APR: 33.9%</p>
          <div className="balance">
            <p>Balance Transfer Offer Duration: </p>
            <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Purchase Offer Duration: </p> <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Credit Available: </p> <p className="bold"> £300</p>
          </div>
        </div>
        <h3>Total Credit: £3300</h3>
      </div>
    );
  }
  if (employed !== "Student" && income < 16000)
    return (
      <div>
        <div className="card">
          <h1>Anywhere Card</h1>
          <p>APR: 33.9%</p>
          <div className="balance">
            <p>Balance Transfer Offer Duration: </p>
            <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Purchase Offer Duration: </p> <p className="bold"> 0 months</p>
          </div>
          <div className="balance">
            <p>Credit Available: </p> <p className="bold"> £300</p>
          </div>
        </div>
      </div>
    );
};

export default cards;
