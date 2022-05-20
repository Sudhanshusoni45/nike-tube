import axios from "axios";

const deleteVideoFromHistoryService = ({ token, _id }) => {
  const url = `/api/user/history/${_id}`;
  const config = {
    headers: { authorization: token },
  };
  const response = axios.delete(url, config);
  return response;
};

export { deleteVideoFromHistoryService };
