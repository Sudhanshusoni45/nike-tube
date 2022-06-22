import { createAsyncThunk } from "@reduxjs/toolkit";

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
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
