import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import arr from "./utils/dummy";

//Header
//Body
//Footer

function App() {
  let [A, setA] = useState(arr);
  function sortArray() {
    A.sort((a, b) => Number(a.price) - Number(b.price));
    setA([...A]);
    console.log(A)
  }
  function priceAbove99(){
    const B=arr.filter((value)=>value.price>699)
    setA([...B])
  }
  return (
    <>
      <Header />
      <button onClick={sortArray}>Sort by Price</button>
      <button onClick={priceAbove99}>Price above 699</button>

      <div
        className="middle"
        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
        {A.map((value, index) => (
          <Card
            key={index}
            cloth={value.cloth}
            price={value.price}
            offer={value.offer}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
