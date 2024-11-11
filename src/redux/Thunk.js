import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk(
  "post/fetch",
  async (url, thunkAPI) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("something went wrong");
      } else {
        const data = await response.json();
        return data;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
