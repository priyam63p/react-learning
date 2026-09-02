import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  //   let count = 0;
  let [count, setCount] = useState(0);
  function incrementNumber() {
    // count += 1;
    setCount(count+1);
  }
  function decrementNumber() {
    // count -= 1;
    setCount(count-1);
  }
  return (
    <div className="first">
      <h1>Count is:{count}</h1>
      <button onClick={incrementNumber}>Increment {count}</button>
      <button onClick={decrementNumber}>Decrement {count }</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
