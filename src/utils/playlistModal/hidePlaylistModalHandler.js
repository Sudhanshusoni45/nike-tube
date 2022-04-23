const hidePlaylistModalHandler = (playlistModalDispatch) => {
  playlistModalDispatch({
    type: "HIDE_PLAYLIST_MODAL",
    payload: { showPlaylistModal: false },
  });
};

export { hidePlaylistModalHandler };
