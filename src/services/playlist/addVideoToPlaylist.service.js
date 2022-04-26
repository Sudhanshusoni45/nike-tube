import axios from "axios";

const addVideoToPlaylistService = ({ playlistId, video, token }) => {
  const url = `/api/user/playlists/${playlistId}`;
  const data = { video };
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.post(url, data, config);
  return response;
};

export { addVideoToPlaylistService };
