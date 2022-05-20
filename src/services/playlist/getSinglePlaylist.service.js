import axios from "axios";

const getSinglePlaylistService = ({ playlistId, token }) => {
  const url = `/api/user/playlists/${playlistId}`;
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.get(url, config);
  return response;
};

export { getSinglePlaylistService };
