import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "welcome",
};

const SampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    updateMessage(state, action) {
      return {
        ...state,
        message: "updated",
      };
    },
  },
});

export const { updateMessage } = SampleSlice.actions;

export default SampleSlice.reducer;
