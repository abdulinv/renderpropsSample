import { createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "./Thunk";

const initialState = {
  message: "second slice",
  posts: [],
  loading: false,
  error: null,
};

const SampleSlice2 = createSlice({
  name: "sample2",
  initialState,
  reducers: {
    updateMessage(state, action) {
      return {
        ...state,
        message: "updated",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { updateMessage } = SampleSlice2.actions;

export default SampleSlice2.reducer;
