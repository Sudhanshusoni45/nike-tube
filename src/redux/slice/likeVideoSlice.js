import { createSlice } from "@reduxjs/toolkit";
import {
  addToLikeVideo,
  getLikeVideo,
  removeFromLikeVideo,
} from "../thunk/likeVideoThunk";

const initialState = [];

const likeVideoSlice = createSlice({
  name: "likeVideo",
  initialState,
  reducers: {},
  extraReducers: {
    [addToLikeVideo.fulfilled]: (state, { payload: { likes } }) => {
      return likes;
    },
    [removeFromLikeVideo.fulfilled]: (state, { payload: { likes } }) => {
      return likes;
    },
    [getLikeVideo.fulfilled]: (state, { payload: { likes } }) => {
      return likes;
    },
  },
});

const selectLikeVideo = (state) => state.likeVideo;
export { selectLikeVideo };
export default likeVideoSlice.reducer;
