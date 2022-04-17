const loginService = (user) => {
  const url = "/api/auth/login";
  const data = { user };
  const response = useAxios(url, data);
  return response;
};

export { loginService };
