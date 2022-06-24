import { createSlice } from "@reduxjs/toolkit";
import {
  addToPlaylist,
  addVideoToPlaylist,
  deletePlaylist,
  getPlaylist,
} from "../thunk/playlistThunk";

const initialState = [];
const getUpdatedPlaylist = (newPlaylist, playlistState) => {
  const upDatedPlaylist = playlistState.map((playlist) =>
    playlist._id === newPlaylist._id ? newPlaylist : playlist
  );
  return upDatedPlaylist;
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: {
    [getPlaylist.fulfilled]: (state, { payload: { playlists } }) => {
      return playlists;
    },
    [addToPlaylist.fulfilled]: (state, { payload: { playlists } }) => {
      return playlists;
    },
    [addVideoToPlaylist.fulfilled]: (state, { payload: { playlist } }) => {
      return getUpdatedPlaylist(playlist, state);
    },
    [deletePlaylist.fulfilled]: (state, { payload: { playlists } }) => {
      return playlists;
    },
  },
});

export const selectPlaylist = (state) => state.playlist;
export default playlistSlice.reducer;
