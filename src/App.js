import "./App.css";
import { useState } from "react";

import Cards from "./components/cards/cards";

function App() {
  const [name, setName] = useState("");
  const [bday, setBday] = useState("");
  const [employed, setEmployed] = useState("");
  const [income, setIncome] = useState("");
  const [houseNum, setHouseNum] = useState("");
  const [pc, setPC] = useState("");
  const [newUser, setNewUser] = useState({});

  const handleSubmit = (e, newUser) => {
    e.preventDefault();
    setNewUser({ name, bday, employed, income, houseNum, pc });

    // if (employed === "Student") {
    //   return (
    //     <div>
    //       <div>Student Card</div>
    //       {/* <div>Anywhere Card</div> */}
    //     </div>
    //   );
    // }
    // if (income >= 16000) {
    //   return (
    //     <div>
    //       <div>Liquid Card</div>
    //       {/* <div>Anywhere Card</div> */}
    //     </div>
    //   );
    // }
    // if (income >= 1) {
    //   return <div>Anywhere Card</div>;
    // }
    // switch ({ name, bday, employed, income, houseNum, pc }) {
    //   case employed === "Student":
    //     console.log("Student Card");
    //     break;
    //   case income > 16000:
    //     console.log("Liquid Card");
    //     break;
    //   default:
    //     console.log("Anywhere Card");
    //     break;
    // }
  };

  return (
    <div className="App">
      <div>
        <h1>Totally Money Code Test</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>D.O.B</label>
            <input
              type="date"
              required
              value={bday}
              onChange={(e) => setBday(e.target.value)}
            />
          </div>
          <div>
            <label>Employment Status</label>
            <select
              required
              value={employed}
              onChange={(e) => setEmployed(e.target.value)}
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Student">Student</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>
          <div>
            <label>Income</label>
            <input
              type="number"
              required
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          <div>
            <label>House Number</label>
            <input
              type="number"
              required
              value={houseNum}
              onChange={(e) => setHouseNum(e.target.value)}
            />
          </div>
          <div>
            <label>Postcode</label>
            <input
              type="text"
              required
              value={pc}
              onChange={(e) => setPC(e.target.value)}
            />
          </div>
          <button>Submit</button>
        </form>
        <Cards newUser={newUser} />
      </div>
    </div>
  );
}

export default App;
