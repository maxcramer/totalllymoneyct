import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [bday, setBday] = useState("");
  const [employed, setEmployed] = useState("Full Time");
  const [income, setIncome] = useState("");
  const [houseNum, setHouseNum] = useState("");
  const [pc, setPC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, bday, employed, income, houseNum, pc };
    console.log(newUser);
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
          <button type="submit">Submit</button>
        </form>
      </div>
      <p>{name}</p>
      <p>{bday}</p>
      <p>{employed}</p>
      <p>{income}</p>
      <p>{houseNum}</p>
      <p>{pc}</p>
    </div>
  );
}

export default App;
