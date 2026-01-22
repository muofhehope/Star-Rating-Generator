import React, { useState } from "react";
import starGenerator from "./starGenerator";

function App() {
  const [number, setNumber] = useState("");
  const [stars, setStars] = useState("");
  const [error, setError] = useState("");


  // Form Submission Handling
  function handleSubmit(e) {
    e.preventDefault();


    // Validation: empty input
    if (number === "") {
      setError("Please enter a number between 1 and 10");
      setStars("");
      return;
    }


    // Convert input to number
    const value = Number(number);

    // Validation: numbers only
    if (isNaN(value)) {
      setError("Please enter a number between 1 and 10");
      setStars("");
      return;
    }

    // Validation: range 1–10
    if (value < 1 || value > 10) {
      setError("Please enter a number between 1 and 10");
      setStars("");
      return;
    }


    // Valid input remove error output
    setError("");
    setStars(starGenerator(value));
  }
  return (


    <div
    style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          marginTop: "60px",
          fontSize: "25px" 
        }}>
      <h2 style={{ fontSize: "50px" }}>Star Rating Generator</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form> 
  
    {/* conditional rendering. */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {stars && <p style={{ color: "green" }}>{stars}</p>}
    </div>

  );
}

export default App;














// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;