import React from "react";

const cards = ({ newUser: { name, bday, employed, income, houseNum, pc } }) => {
  // console.log("CARDS: ", newUser);
  // console.log("NewUser.INCOME: ", income);
  if (income < 3000) {
    console.log("Valid for Card 1");
  }
  if (income < 5000) {
    console.log("Valid for Card 2");
  }
  if (income < 7000) {
    console.log("Valid for Card 3");
  }
  return <div>cards</div>;
};

export default cards;
