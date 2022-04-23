const showPlaylistModalHandler = (playlistModalDispatch) => {
  playlistModalDispatch({
    type: "SHOW_PLAYLIST_MODAL",
    payload: { showPlaylistModal: true },
  });
};

export { showPlaylistModalHandler };
