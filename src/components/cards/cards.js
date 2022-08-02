import React from "react";

const cards = ({ newUser: { name, bday, employed, income, houseNum, pc } }) => {
  if (employed === "Student") {
    return (
      <div>
        <div>Student Card</div>
        <div>Anywhere Card</div>
      </div>
    );
  }
  if (income >= 16000) {
    return (
      <div>
        <div>Liquid Card</div>
        <div>Anywhere Card</div>
      </div>
    );
  }
  if (employed !== "Student" && income < 16000)
    return (
      <div>
        <div>Anywhere Card</div>
      </div>
    );

  return (
    <div>
      <h1>Avaliable Cards</h1>
    </div>
  );
};

export default cards;
