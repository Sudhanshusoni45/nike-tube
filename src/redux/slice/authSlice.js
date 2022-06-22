import { createSlice } from "@reduxjs/toolkit";
import { login } from "../thunk";

const initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      console.log("action:", action);
      const { token, user } = action.payload;
      state.status = "suceeded";
      state.user = user;
      state.token = token;

      state = {};
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
      console.error(action);
    },
  },
});

export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
