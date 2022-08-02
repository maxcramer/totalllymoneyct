import "./App.css";
import { useState } from "react";
function App() {
  const [userDetails, setUserDetails] = useState({});

  const handleSubmit = (e) => {
    setUserDetails({ value: e.target.value });
  };

  console.log(userDetails);
  return (
    <div className="App">
      <div>
        <h1>Totally Money Code Test</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" required />
          </div>
          <div>
            <label>D.O.B</label>
            <input type="date" required />
          </div>
          <div>
            <label>Employment Status</label>
            <select required>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Student">Student</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>
          <div>
            <label>Income</label>
            <input type="number" required />
          </div>
          <div>
            <label>House Number</label>
            <input type="number" required />
          </div>
          <div>
            <label>Postcode</label>
            <input type="text" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
