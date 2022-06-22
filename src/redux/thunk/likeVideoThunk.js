import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToLikeVideo = createAsyncThunk(
  "likeVideo/addToLikeVideo",
  async ({ video, token }) => {
    try {
      const url = "/api/user/likes";
      const data = { video };
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(url, data, config);
      console.log("response from thunk:", response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
