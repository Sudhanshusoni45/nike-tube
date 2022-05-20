import { deleteVideoFromPlaylistService } from "../../services";

const deleteVideoFromPlaylistHandler = async ({
  token,
  playlistDispatch,
  _id,
  playlistId,
}) => {
  try {
    const response = await deleteVideoFromPlaylistService({
      token,
      _id,
      playlistId,
    });
    if (response.status === 200) {
      const { data } = response;
      playlistDispatch({ type: "DELETE_VIDEO_FROM_PLAYLIST", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { deleteVideoFromPlaylistHandler };
