const playlistReducer = (state, { type, payload: { playlists } }) => {
  switch (type) {
    case "INITIALIZE":
      return [...playlists];
    case "ADD_TO_PLAYLIST":
      return [...playlists];
  }
};

export { playlistReducer };
