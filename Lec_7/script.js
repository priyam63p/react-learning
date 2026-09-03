import React, { use, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Colorfull from "./Component/colorful";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="counter">
        <h1>Counter is:{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          style={{ backgroundColor: "yellow" }}
        >
          Increment
        </button>
      </div>
      <Colorfull></Colorfull>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
