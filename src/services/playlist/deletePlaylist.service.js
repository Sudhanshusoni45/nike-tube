import axios from "axios";

const deletePlaylistService = ({ playlistId, token }) => {
  const url = `/api/user/playlists/${playlistId}`;
  const config = {
    headers: {
      authorization: token,
    },
  };

  const response = axios.delete(url, config);
  return response;
};

export { deletePlaylistService };
