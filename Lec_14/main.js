import react from "react";
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import Counting  from "./Counting";
import stores from "./Stores"

function App(){

    return(
        <Provider store={stores}>
        <Counting></Counting>
        </Provider>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);