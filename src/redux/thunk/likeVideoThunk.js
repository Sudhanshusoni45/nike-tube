import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLikeVideo = createAsyncThunk(
  "likeVideo/getLikeVideo",
  async (token) => {
    try {
      const url = "/api/user/likes";
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

export const addToLikeVideo = createAsyncThunk(
  "likeVideo/addToLikeVideo",
  async ({ video, token }) => {
    try {
      const url = "/api/user/likes";
      const dataaa = { video };
      const config = {
        headers: {
          authorization: token,
        },
      };
      const {
        data: { likes },
        status,
      } = await axios.post(url, dataaa, config);
      return { likes, status };
    } catch (error) {
      console.error(error);
    }
  }
);

export const removeFromLikeVideo = createAsyncThunk(
  "likeVideo/removeFromLikeVideo",
  async ({ _id, token }) => {
    try {
      const url = `/api/user/likes/${_id}`;
      const config = {
        headers: {
          authorization: token,
        },
      };
      const {
        data: { likes },
        status,
      } = await axios.delete(url, config);
      return { likes, status };
    } catch (error) {
      console.error(error);
    }
  }
);
