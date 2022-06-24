import { getPlaylist } from "../../redux/thunk/playlistThunk";

const getPlaylistHandler = async ({ token, dispatch }) => {
  try {
    await dispatch(getPlaylist(token));
  } catch (error) {
    console.error(error);
  }
};

export { getPlaylistHandler };
