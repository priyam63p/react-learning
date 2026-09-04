import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(null);

  function Fibbonaci(n) {
    if (n <= 1) return n;
    return Fibbonaci(n - 1) + Fibbonaci(n - 2);
  }
  const result = useMemo(() => 
    Fibbonaci(number)
  , [number]);
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <div>
        <h2>Fibonacci number is: {result}</h2>
        <input type="number" onChange={(e) => setNumber(e.target.value)} />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
