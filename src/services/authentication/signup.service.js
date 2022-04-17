const signupService = (newUser) => {
  const url = "/api/auth/signup";
  const data = { newUser };
  const response = useAxios(url, data);
  return response;
};

export { signupService };
