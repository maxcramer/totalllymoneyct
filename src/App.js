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
  };

  return (
    <div className="App">
      <div>
        <h1>Totally Money Code Test</h1>
        <form onSubmit={handleSubmit}>
          <div className="formItem">
            <label>Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label>D.O.B</label>
            <input
              type="date"
              required
              value={bday}
              onChange={(e) => setBday(e.target.value)}
            />
          </div>
          <div className="formItem">
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
          <div className="formItem">
            <label>Income</label>
            <input
              type="number"
              required
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label>House Number</label>
            <input
              type="number"
              required
              value={houseNum}
              onChange={(e) => setHouseNum(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label>Postcode</label>
            <input
              type="text"
              required
              value={pc}
              onChange={(e) => setPC(e.target.value)}
            />
          </div>
          <div className="btn_container">
            <button id="pushable2">
              <span id="front2">Submit</span>
            </button>
          </div>
        </form>
        <Cards newUser={newUser} />
      </div>
    </div>
  );
}

export default App;
