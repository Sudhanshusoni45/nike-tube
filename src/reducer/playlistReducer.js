const playlistReducer = (state, { type, payload: { playlists } }) => {
  switch (type) {
    case "INITIALIZE":
      return [...playlists];
  }
};

export { playlistReducer };
