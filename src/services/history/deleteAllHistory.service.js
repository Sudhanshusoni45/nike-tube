import axios from "axios";

const deleteAllHistoryService = (token) => {
  const url = "/api/user/history/all";
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.delete(url, config);
  return response;
};

export { deleteAllHistoryService };
