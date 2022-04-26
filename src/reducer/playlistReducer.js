const playlistReducer = (
  playlistState,
  { type, payload: { playlists, playlist: playlistData, playlist } }
) => {
  const getUpdatedPlaylist = () => {
    return playlistState.reduce(
      (acc, curr) =>
        curr._id === playlistData._id ? [...acc, playlistData] : [...acc, curr],
      []
    );
  };
  switch (type) {
    case "INITIALIZE":
      return [...playlists];
    case "ADD_TO_PLAYLIST":
      return [...playlists];
    case "ADD_VIDEO_TO_PLAYLIST":
      return [...getUpdatedPlaylist()];
  }
};

export { playlistReducer };
