import { createSlice } from "@reduxjs/toolkit";
import { testimonials } from "../../data";
const sliderSlice = createSlice({
  initialState: {
    value: 0,
    length: testimonials.length,
  },
  name: "sliderReducer",
  reducers: {
    prevSlide: (state, action) => {
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
    nextSlide: (state, action) => {
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
  },
});
export const { prevSlide, nextSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
