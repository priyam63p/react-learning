import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [Password, setPassword] = useState("ABCDPDF");
  const [length, setLength] = useState(10);
  const [numberChange, setnumberChange] = useState(false);
  const [charChange, setcharChange] = useState(false);

  function generatePassword() {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberChange) str += "0123456789";
    if (charChange) str += "@#$%^&*!+-/<>";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  }
  useEffect(() => {
    generatePassword();
  }, [length, numberChange, charChange]);

  return (
    <>
      <h1>Password is:{Password}</h1>
      <div className="second">
        <input
          type="range"
          min={5}
          max={50}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        ></input>
        <label>Length is:{length}</label>

        <input
          type="checkbox"
          defaultChecked={numberChange}
          onChange={(e) => setnumberChange(e.target.checked)}
        ></input>
        <label>Number</label>

        <input
          type="checkbox"
          defaultChecked={charChange}
          onChange={(e) => setcharChange(e.target.checked)}
        ></input>
        <label>Character</label>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordGenerator />
);
