import axios from "axios";

const deleteVideoFromPlaylistService = ({ token, playlistId, _id }) => {
  const url = `/api/user/playlists/${playlistId}/${_id}`;
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.delete(url, config);
  return response;
};

export { deleteVideoFromPlaylistService };
