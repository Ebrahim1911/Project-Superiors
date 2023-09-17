import { configureStore } from "@reduxjs/toolkit";
import navParSlice from "./slices/NavParSlice";
import sliderSlice from "./slices/SliderSlice";
export const store = configureStore({
  reducer: {
    navPar: navParSlice,
    slider: sliderSlice,
  },
});
