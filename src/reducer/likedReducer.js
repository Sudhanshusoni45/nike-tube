const likedReducer = (state, { type, payload: { likes } }) => {
  switch (type) {
    case "GET_LIKES":
      return [...likes];
    case "ADD_TO_LIKE":
      return [...likes];
    case "REMOVE_FROM_LIKE":
      return [...likes];
  }
};

export { likedReducer };
