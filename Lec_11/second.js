import Third from "./third";
import GlobalContext from "./Global";
import { useContext } from "react";

export default function Second({count,setCount}){
    const {count,setCount}=useContext(GlobalContext)
    return(
        <>
        <h2>My name is Priyam</h2>
        <Third count={count} setCount={setCount}/>
        </>
    )
}