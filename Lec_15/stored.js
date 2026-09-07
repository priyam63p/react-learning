import { configureStore } from "@reduxjs/toolkit";
import {cartReducer} from "Slicer2"

const stored=configureStore({
    reducer:{
        slice2:slice2Reducer,
        // slice2:slice2Reducer


    }
})

export default stored