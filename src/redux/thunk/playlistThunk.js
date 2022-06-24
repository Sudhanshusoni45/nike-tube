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

export const addToPlaylist = createAsyncThunk(
  "playlist/addToPlaylist",
  async ({ token, newPlaylistTitle }) => {
    try {
      const url = "/api/user/playlists";
      const data = { playlist: { title: newPlaylistTitle } };
      const config = {
        headers: {
          authorization: token,
        },
      };
      const {
        data: { playlists },
        status,
      } = await axios.post(url, data, config);
      return { playlists, status };
    } catch (error) {
      console.error(error);
    }
  }
);

export const addVideoToPlaylist = createAsyncThunk(
  "playlist/addVideoToPlaylist",
  async ({ playlistId, video, token }) => {
    try {
      const url = `/api/user/playlists/${playlistId}`;
      const data = { video };
      const config = {
        headers: {
          authorization: token,
        },
      };
      const {
        data: { playlist },
        status,
      } = await axios.post(url, data, config);
      return { playlist, status };
    } catch (error) {
      console.error(error);
    }
  }
);
