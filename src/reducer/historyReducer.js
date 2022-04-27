const historyReducer = (state, { type, payload: { history } }) => {
  switch (type) {
    case "INITIALIZE_HISTORY":
      return [...history];
    case "ADD_VIDEO_TO_HISTORY":
      return [...history];
  }
};

export { historyReducer };
