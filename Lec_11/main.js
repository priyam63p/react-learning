import React, { use, useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./increment";
import Decrement from "./decrement";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello good morning everyone</h1>
      <Increment counts={count} setCounts={setCount} />
      <Decrement counts={count} setCounts={setCount}/>
      {/* <h1>Child Count is:{count}</h1>
      <Increment counts={count} setCounts={setCount} /> */}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
