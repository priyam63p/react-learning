import { useContext } from "react"
import GlobalContext from "./Global"
export default function Third({count,setCount}){
    const [count,setCount]=useContext(GlobalContext)
    return(
        <>
        <h2>This is third variable {data}</h2>
        </>
    )
}