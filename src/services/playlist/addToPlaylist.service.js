import axios from "axios";

const addToPlaylistService = ({ token, newPlaylistTitle }) => {
  const url = "/api/user/playlists";
  const data = { playlist: { title: newPlaylistTitle } };
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.post(url, data, config);
  return response;
};

export { addToPlaylistService };
