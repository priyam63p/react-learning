import { useState } from "react";
import { useDispatch } from "react-redux";
import {addItems} from Slicer2;
import Slicer2 from "./Slicer2";






export default function FoodCart(value) {
  const [inCart, setinCart] = useState(false);
  const dispatch=useDispatch()
  function handleClick() {
    if (inCart) {
      setinCart(false);
    } else {
      setinCart(true);
    }
  }
  return (
    <>
      <h1>{value.food}</h1>
      <h1>{value.price}</h1>
      <button onClick={handleClick}>{inCart ? "Remove" : "Add"}</button>
    </>
  );
}
