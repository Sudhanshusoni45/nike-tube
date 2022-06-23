const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "../slice/authSlice";
import historyReducer from "../slice/historySlice";
import likeVideoReducer from "../slice/likeVideoSlice";
import watchLaterReducer from "../slice/watchLaterSlice";
import playlistModalReducer from "../slice/playlistModalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    history: historyReducer,
    likeVideo: likeVideoReducer,
    watchLater: watchLaterReducer,
    playlistModal: playlistModalReducer,
  },
});
