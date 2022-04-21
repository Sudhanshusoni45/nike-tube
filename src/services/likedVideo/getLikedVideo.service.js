import axios from "axios";

const getLikedVideoService = (token) => {
  const url = "/api/user/likes";
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.get(url, config);
  return response;
};

export { getLikedVideoService };
