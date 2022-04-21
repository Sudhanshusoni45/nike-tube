import axios from "axios";

const addToWatchlaterService = ({ token, video }) => {
  const url = "/api/user/watchlater";
  const data = { video };
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.post(url, data, config);
  return response;
};

export { addToWatchlaterService };
