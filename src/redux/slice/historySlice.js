import { createSlice } from "@reduxjs/toolkit";
import {
  addVideoToHistory,
  deleteAllHistory,
  deleteVideoFromHistory,
} from "../thunk";

const initialState = [];

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: {
    [addVideoToHistory.fulfilled]: (state, { payload: { history } }) => {
      return history;
    },
    [deleteAllHistory.fulfilled]: (state, { payload: { history } }) => {
      return history;
    },
    [deleteVideoFromHistory.fulfilled]: (state, { payload: { history } }) => {
      return history;
    },
  },
});

export const selectHistory = (state) => state.history;
export default historySlice.reducer;
