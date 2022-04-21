import axios from "axios";

const removeFromLikeService = ({ _id, token }) => {
  const url = `/api/user/likes/${_id}`;
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.delete(url, config);
  return response;
};

export { removeFromLikeService };
