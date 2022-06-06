const authReducer = (state, action) => {
  const {
    type,
    payload: { token, user },
  } = action;
  switch (type) {
    case "LOGIN":
      return { token, user };
    case "SIGNUP":
      return { token, user };
    case "LOGOUT":
      return { token, user };
  }
};

export { authReducer };
