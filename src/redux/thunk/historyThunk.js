import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addVideoToHistory = createAsyncThunk(
  "history/addVideoToHistory",
  async ({ video, token }) => {
    try {
      const url = "/api/user/history";
      const data = { video };
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(url, data, config);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteAllHistory = createAsyncThunk(
  "history/deleteAllHistory",
  async (token) => {
    try {
      const url = "/api/user/history/all";
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.delete(url, config);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getHistory = createAsyncThunk(
  "history/getHistory",
  async (token) => {
    try {
      const url = "/api/user/history";
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

export const deleteVideoFromHistory = createAsyncThunk(
  "history/deleteVideoFromHistory",
  async ({ _id, token }) => {
    try {
      const url = `/api/user/history/${_id}`;
      const config = {
        headers: { authorization: token },
      };
      const response = await axios.delete(url, config);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
