const loginService = ( user ) => {
  const url = "/api/auth/login";
  const data = { user };
  const response = await useAxios(url);
};

export { loginService };
