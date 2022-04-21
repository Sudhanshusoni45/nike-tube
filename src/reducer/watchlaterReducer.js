const watchlaterReducer = (state, { type, payload: { watchlater } }) => {
  switch (type) {
    case "INITIALIZE":
      return [...watchlater];
    case "ADD_TO_WATCHLATER":
      return [...watchlater];
  }
};

export { watchlaterReducer };
