import { createSlice } from "@reduxjs/toolkit";
import { getPlaylist } from "../thunk/playlistThunk";

const initialState = [];

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: {
    [getPlaylist.fulfilled]: (state, { payload: { playlists } }) => {
      return playlists;
    },
  },
});

export const selectPlaylist = (state) => state.playlist;
export default playlistSlice.reducer;
