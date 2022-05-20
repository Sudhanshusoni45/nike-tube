const showPlaylistModalHandler = ({ playlistModalDispatch, video }) => {
  playlistModalDispatch({
    type: "SHOW_PLAYLIST_MODAL",
    payload: { showPlaylistModal: true, video },
  });
};

export { showPlaylistModalHandler };
