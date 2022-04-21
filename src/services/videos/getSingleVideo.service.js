import axios from "axios";

const getSingleVideoService = (_id) => {
  const url = `/api/video/${_id}`;
  const response = axios.get(url);
  return response;
};
export { getSingleVideoService };
