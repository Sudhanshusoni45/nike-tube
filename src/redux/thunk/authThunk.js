import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (userCred) => {
  try {
    const url = "/api/auth/login";
    const data = userCred;
    const response = await axios.post(url, data);
    console.log("response from thunk:", response);
    const { encodedToken: token, foundUser: user } = response.data;
    // whatever i return from thunk, is passed as payload inside action object to extra reducers function
    return { token, user, status: response.status };
  } catch (error) {
    console.error(error);
  }
});
