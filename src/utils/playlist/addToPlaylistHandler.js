import { toast } from "react-toastify";
import { addToPlaylist } from "../../redux/thunk/playlistThunk";

const addToPlaylistHandler = async ({ token, newPlaylistTitle, dispatch }) => {
  try {
    const {
      payload: { status },
    } = await dispatch(addToPlaylist({ token, newPlaylistTitle }));
    if (status === 201) {
      toast.success("new playlist created");
    }
  } catch (error) {
    console.error(error);
  }
};

export { addToPlaylistHandler };
