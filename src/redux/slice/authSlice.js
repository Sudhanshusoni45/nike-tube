import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../thunk";

const initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      state.status = "suceeded";
      state.token = token;
      state.user = user;
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
      console.error(action);
    },
    [signup.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
    },
  },
});

export const selectAuth = (state) => state.auth;
export const { logout } = authSlice.actions;
export default authSlice.reducer;
