import axios from "axios";

const getVideosService = () => {
  const url = "/api/videos";
  const response = axios.get(url);
  return response;
};

export { getVideosService };
