import {configureStore, createstore} from "@reduxjs/toolkit"
import slice1Reducer from "./Slicer"

const stores=configureStore({
    reducer:{
        slice1:slice1Reducer,
    }
})
export default stores