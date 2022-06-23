import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWatchLaterVideo = createAsyncThunk(
  "watchlater/getWatchLaterVideo",
  async (token) => {
    try {
      const url = "/api/user/watchlater";
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

export const addToWatchLater = createAsyncThunk(
  "watchLater/addToWatchLater",
  async ({ video, token }) => {
    try {
      const url = "/api/user/watchlater";
      const data = { video };
      const config = {
        headers: {
          authorization: token,
        },
      };
      const {
        data: { watchlater },
        status,
      } = await axios.post(url, data, config);
      return { watchlater, status };
    } catch (error) {
      console.error(error);
    }
  }
);

export const removeFromWatchLater = createAsyncThunk(
  "watchLater/removeFromWatchLater",
  async ({ token, _id }) => {
    try {
      const url = `/api/user/watchlater/${_id}`;
      const config = {
        headers: {
          authorization: token,
        },
      };
      const {
        data: { watchlater },
        status,
      } = await axios.delete(url, config);
      return { watchlater, status };
    } catch (error) {
      console.error(error);
    }
  }
);
