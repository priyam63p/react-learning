import { useState } from "react";
// import Increment from "./increment";
export default function Decrement({counts,setCounts}){

    // const [count, setCount] = useState(0);
    return(
        <>
        {/* <h2>Parent Counter is:{counts}</h2> */}
        <button onClick={()=>setCounts(counts-1)}>Decrement</button>
        </>
    )
}