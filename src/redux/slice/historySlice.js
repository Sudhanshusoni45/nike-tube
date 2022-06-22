import { createSlice } from "@reduxjs/toolkit";
import { addVideoToHistory, deleteAllHistory, getHistory } from "../thunk";

const initialState = [];

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: {
    [addVideoToHistory.fulfilled]: (state, { payload: { history } }) => {
      state.push(...history);
    },
    [deleteAllHistory.fulfilled]: (state, { payload }) => {
      return payload.history;
    },
  },
});

export const selectHistory = (state) => state.history;
export default historySlice.reducer;
