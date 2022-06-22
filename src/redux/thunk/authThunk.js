import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (userCred) => {
  try {
    const url = "/api/auth/login";
    const data = userCred;
    const response = await axios.post(url, data);
    const { encodedToken: token, foundUser: user } = response.data;
    // whatever i return from thunk, is passed as payload inside action object to extra reducers function
    return { token, user, status: response.status };
  } catch (error) {
    console.error(error);
  }
});

export const signup = createAsyncThunk("auth/signup", async () => {
  try {
    const url = "/api/auth/signup";
    const data = newUser;
    const response = await axios.post(url, data);
    const { encodedToken: token, createdUser: user } = response.data;
    return { token, user, status: response.status };
  } catch (error) {
    console.error(error);
  }
});
