import React, { useEffect,useState } from "react";
function Colorfull() {
  const [Colour, setColor] = useState("black");
  useEffect(() => {
    console.log("UseEffect Executed");
    document.body.style.backgroundColor = Colour;
  }, [Colour]);
  return (
    <>
      <h1>Background Colour Changer</h1>
      <div className="btn">
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "violet" }}
          onClick={() => setColor("violet")}
        >
          Violet
        </button>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          {" "}
          Blue
        </button>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          style={{ backgroundColor: "aqua" }}
          onClick={() => setColor("aqua")}
        >
          Aqua
        </button>
      </div>
    </>
  );
}

export default React.memo (Colorfull)