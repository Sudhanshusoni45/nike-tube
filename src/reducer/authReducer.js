const authReducer = (state, action) => {
  const {
    type,
    payload: { token, user },
  } = action;
  switch (type) {
    case "LOGIN":
      return { ...state, token, user };
    case "SIGNUP":
      return { ...state, token, user };
  }
};

export { authReducer };
