import { createSlice } from "@reduxjs/toolkit";
import { addVideoToHistory, deleteAllHistory } from "../thunk";

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
      console.log("payload:", payload);
      return payload.history;
    },
  },
});

export const selectHistory = (state) => state.history;
export default historySlice.reducer;
