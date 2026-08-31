import React from "react";
import ReactDOM from "react-dom/client";

//Header
//Body
//Footer

function Card(props) {
  return (
    <div style={{ border: "2px solid black", padding: "2px" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpuuJzuBDas7yvCamMVdSVuwHH0zw12LuPnYb9aipYA&s=10"
        height="200px"
        width="200px"
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}
const arr = [
  { cloth: "T-shirt", offer: "20-80%OFF" },
  { cloth: "Skirt", offer: "10-40%OFF" },
  { cloth: "Jeans", offer: "20-30%OFF" },
  { cloth: "Pant", offer: "40-60%OFF" },
  { cloth: "T-shirt", offer: "20-80%OFF" },
];
function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {/* /*<Card cloth="T-shirt" offer="20-80%OFF"/>
      <Card cloth="T-shirt" offer="20-80%OFF"/>
      <Card cloth="T-shirt" offer="20-80%OFF"/>
      <Card cloth="T-shirt" offer="20-80%OFF"/>
      <Card cloth="T-shirt" offer="20-80%OFF"/>
      <Card cloth="T-shirt" offer="20-80%OFF"/>
      <Card cloth="T-shirt" offer="20-80%OFF"/>
      <Card cloth="T-shirt" offer="20-80%OFF"/>
      <Card cloth="T-shirt" offer="20-80%OFF"/>*/}
      {arr.map((value, index) => (
        <Card key={index} cloth={value.cloth} offer={value.offer} />
      ))}
    </div>
  );
}
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
