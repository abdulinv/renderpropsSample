import { createSlice } from "@reduxjs/toolkit";
import Login from "../Login";

const initialState = {
  isLoggedIn: false,
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;
