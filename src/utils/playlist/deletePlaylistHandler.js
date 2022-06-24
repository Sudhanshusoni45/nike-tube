import { deletePlaylist } from "../../redux/thunk/playlistThunk";

const deletePlaylistHandler = async ({ playlistId, token, dispatch }) => {
  try {
    await dispatch(deletePlaylist({ playlistId, token }));
  } catch (error) {
    console.error(error);
  }
};

export { deletePlaylistHandler };
