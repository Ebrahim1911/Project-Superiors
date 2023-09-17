import { createSlice } from "@reduxjs/toolkit";
const navParSlice = createSlice({
  initialState: false,
  name: "navParSlice",
  reducers: {
    toggleState: (state) => {
      return !state;
    },
  },
});
export const { toggleState } = navParSlice.actions;
export default navParSlice.reducer;
