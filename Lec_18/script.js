import react, { useState } from "react";
import ReactDOM from "react-dom/client";
import Add from "./Add";

function App() {
  const [language, setLanguage] = useState(["JS", "TS", "C++"]);
  function handleClick(){
    setLanguage(["C#",...language])

  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        {language.map((value, index) => (
          <Add key={value} value={value}></Add>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleClick}>Add language</button>
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)