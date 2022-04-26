const historyReducer = (state, { type, payload: history }) => {
  switch (type) {
    case "INITIALIZE_HISTORY":
      return [...history];
  }
};

export { historyReducer };
