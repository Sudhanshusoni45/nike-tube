import axios from "axios";

const getWatchlaterVideoService = (token) => {
  const url = "/api/user/watchlater";
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.get(url, config);
  return response;
};

export { getWatchlaterVideoService };
