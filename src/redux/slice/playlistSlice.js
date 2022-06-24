import { createSlice } from "@reduxjs/toolkit";
import {
  addToPlaylist,
  addVideoToPlaylist,
  getPlaylist,
} from "../thunk/playlistThunk";

const initialState = [];
const getUpdatedPlaylist = (newPlaylist, playlistState) => {
  const upDatedPlaylist = playlistState.map((playlist) =>
    playlist._id === newPlaylist._id ? newPlaylist : playlist
  );
  console.log("upDatedPlaylist:", upDatedPlaylist);
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
  },
});

export const selectPlaylist = (state) => state.playlist;
export default playlistSlice.reducer;
