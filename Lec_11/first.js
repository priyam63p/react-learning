import React, { use, useState, useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Second from "./second";
import GlobalContext from "./Global";
import { useContext } from "react";
import  use {usercallBack}

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <GlobalContext.Provider value={{count:count,setCount:setCount}}>
        <h1>Hello good morning everyone</h1>
        <Second count={count} setCount={count}></Second>
      </GlobalContext.Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
