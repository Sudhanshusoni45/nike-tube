const likedReducer = (state, { type, payload: { likes } }) => {
  switch (type) {
    case "GET_LIKES":
      return [...state, likes];
  }
};

export { likedReducer };
