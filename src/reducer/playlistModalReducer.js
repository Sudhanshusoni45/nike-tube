const playlistModalReducer = (
  state,
  { type, payload: { showPlaylistModal, showNewPlaylistInput } }
) => {
  switch (type) {
    case "TOGGLE_MODAL_VIEW":
      return { ...state, showPlaylistModal };
    case "TOGGLE_MODAL_NEWPLAYLIST_INPUT":
      return { ...state, showNewPlaylistInput };
  }
};

export { playlistModalReducer };
