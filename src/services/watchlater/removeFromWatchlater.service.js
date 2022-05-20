import axios from "axios";

const removeFromWatchlaterService = ({ token, _id }) => {
  const url = `/api/user/watchlater/${_id}`;
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.delete(url, config);
  return response;
};

export { removeFromWatchlaterService };
