import axios from "axios";
const addToLikeVideoService = ({ video, token }) => {
  console.log("video:", video);
  const url = "/api/user/likes";
  const data = { video };
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.post(url, data, config);
  return response;
};

export { addToLikeVideoService };
