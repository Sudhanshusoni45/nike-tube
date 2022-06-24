import { toast } from "react-toastify";
import { addVideoToPlaylist } from "../../redux/thunk/playlistThunk";

const addVideoToPlaylistHandler = async ({
  token,
  playlistId,
  video,
  dispatch,
}) => {
  try {
    const {
      payload: { status },
    } = await dispatch(addVideoToPlaylist({ video, token, playlistId }));
    if (status === 201) {
      toast.success("video added to playlist");
    }
  } catch (error) {
    console.error(error);
  }
};

export { addVideoToPlaylistHandler };
