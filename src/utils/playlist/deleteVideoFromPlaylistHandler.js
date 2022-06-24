import { deleteVideoFromPlaylist } from "../../redux/thunk/playlistThunk";
import { deleteVideoFromPlaylistService } from "../../services";

const deleteVideoFromPlaylistHandler = async ({
  token,
  _id,
  playlistId,
  dispatch,
}) => {
  try {
    await dispatch(deleteVideoFromPlaylist({ playlistId, token, _id }));
  } catch (error) {
    console.error(error);
  }
};

export { deleteVideoFromPlaylistHandler };
