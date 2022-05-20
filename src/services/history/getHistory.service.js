import axios from "axios";

const getHistoryService = (token) => {
  const url = "/api/user/history";
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.get(url, config);
  return response;
};

export { getHistoryService };
