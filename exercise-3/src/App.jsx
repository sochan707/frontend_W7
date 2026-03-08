import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA (e){
    const value = e.target.value;
    setA(value);
  }

  function onB (e){
    const value = e.target.value;
    setB(value);
  }

  function handleCompute() {
  const numA = Number(a);
  const numB = Number(b);

  if (a === "" || b === "" || isNaN(numA) || isNaN(numB)) {
    setError(true);
    setResult("A and B shall be number!");
  } else {
    setError(false);
    setResult(numA + numB);
  }
}

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input className={error? "error" : ""} disabled value={result}/>
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
