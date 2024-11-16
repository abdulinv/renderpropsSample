import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPost(state) {
      state.loading = true;
    },
    fetchPostSuccess(state, action) {
      state.loading = false;
      console.log("postsv", action.p);
      state.data = action.posts;
    },
    fetchPostFailure(state, action) {
      state.loading = false;
      state.data = [];
      state.error = action.error;
    },
  },
});

export const { fetchPost, fetchPostSuccess, fetchPostFailure } =
  postSlice.actions;

export default postSlice.reducer;
