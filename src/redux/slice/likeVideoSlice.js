import { createSlice } from "@reduxjs/toolkit";
import { addToLikeVideo } from "../thunk/likeVideoThunk";

const initialState = [];

const likeVideoSlice = createSlice({
  name: "likeVideo",
  initialState,
  reducers: {},
  extraReducers: {
    [addToLikeVideo.fulfilled]: (state, action) => {
      console.log("action:", action);
    },
  },
});

export default likeVideoSlice.reducer;
