import { useState } from "react";
import Decrement from "./decrement";
export default function Increment({counts,setCounts}){

    // const [count, setCount] = useState(0);
    return(
        <>
        {/* <h2>Parent Counter is:{counts}</h2> */}
        <h2>Child counter is: {counts}</h2>
        <button onClick={()=>setCounts(counts+1)}>Increment</button>
        </>
    )
}