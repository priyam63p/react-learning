import { cresteslice } from "@reduxjs/toolkit";
import reducer from "./Slicer1";
const FootSlicer = cresteslice({
  name: "slice2",
  initialState: { count: 0 },
  reducers: {
    addItems: (state) => {
      state.count++;
    },
    removeItems: (state) => {
      state.count--;
    },
  },
});
export default FootSlicer.reducer
export const{}=FootSlicer.actions