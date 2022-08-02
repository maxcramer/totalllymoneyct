import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <h1>Totally Money Code Test</h1>
        <form action="">
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>D.O.B</label>
            <input type="date" />
          </div>
          <div>
            <label>Employment Status</label>
            <input type="text" />
          </div>
          <div>
            <label>Income</label>
            <input type="number" />
          </div>
          <div>
            <label>House Number</label>
            <input type="number" />
          </div>
          <div>
            <label>Postcode</label>
            <input type="text" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </body>
    </div>
  );
}

export default App;
