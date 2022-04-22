import axios from "axios";

const addToPlaylistService = (token) => {
  const url = "/api/user/playlists";
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.post(url, config);
  return response;
};

export { addToPlaylistService };
