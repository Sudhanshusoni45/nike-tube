import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPlaylistModal: false,
};

const playlistModalSlice = createSlice({
  name: "playlistModal",
  initialState,
  reducers: {
    showPlaylistModal: (state, { payload }) => {
      state.showPlaylistModal = true;
      state.video = payload.video;
    },
    hidePlaylistModal: (state, { payload }) => {
      state.showPlaylistModal = false;
    },
    toggleNewPlaylistInput: (state, { payload: { showNewPlaylistInput } }) => {
      state.showNewPlaylistInput = showNewPlaylistInput;
    },
  },
});

export const selectPlaylistModal = (state) => state.playlistModal;

export default playlistModalSlice.reducer;
export const { showPlaylistModal, hidePlaylistModal, toggleNewPlaylistInput } =
  playlistModalSlice.actions;
