import axios from "axios";

const getPlaylistService = (token) => {
  const url = "/api/user/playlists";
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.get(url, config);
  return response;
};

export { getPlaylistService };
