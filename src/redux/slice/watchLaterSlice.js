import { createSlice } from "@reduxjs/toolkit";
import { addToWatchLater, getWatchLaterVideo } from "../thunk/watchlaterThunk";

const initialState = [];
const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState,
  reducers: {},
  extraReducers: {
    [getWatchLaterVideo.fulfilled]: (state, { payload: { watchlater } }) => {
      return watchlater;
    },
    [addToWatchLater.fulfilled]: (state, { payload: { watchlater } }) => {
      return watchlater;
    },
  },
});

export const selectWatchLater = (state) => state.watchLater;
export default watchLaterSlice.reducer;
