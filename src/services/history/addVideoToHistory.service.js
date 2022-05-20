import axios from "axios";

const addVideoToHistoryService = ({ token, video }) => {
  const url = "/api/user/history";
  const data = { video };
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.post(url, data, config);
  return response;
};

export { addVideoToHistoryService };
