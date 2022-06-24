import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlaylist = createAsyncThunk(
  "playlist/getPalylist",
  async (token) => {
    try {
      const url = "/api/user/playlists";
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);