const playlistModalReducer = (
  state,
  { type, payload: { showPlaylistModal, showNewPlaylistInput, video } }
) => {
  switch (type) {
    case "SHOW_PLAYLIST_MODAL":
      return { ...state, showPlaylistModal, video };
    case "HIDE_PLAYLIST_MODAL":
      return { ...state, showPlaylistModal };
    case "TOGGLE_NEWPLAYLIST_INPUT":
      return { ...state, showNewPlaylistInput };
  }
};

export { playlistModalReducer };
