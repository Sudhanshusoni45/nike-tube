const watchlaterReducer = (state, { type, payload: { watchlater } }) => {
  switch (type) {
    case "INITIALIZE":
      return [...watchlater];
  }
};

export { watchlaterReducer };
