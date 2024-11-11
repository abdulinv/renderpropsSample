import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./redux/SampleSlice";
import SampleSlice2 from "./redux/SampleSlice2";
export const store = configureStore({
  reducer: {
    sample1: sampleReducer,
    sample2: SampleSlice2,
  },
});
