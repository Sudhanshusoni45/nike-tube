import { addVideoToPlaylistService } from "../../services";
import { getPlaylistHandler } from "./getPlaylistHandler";

const addVideoToPlaylistHandler = async ({
  token,
  playlistId,
  video,
  playlistDispatch,
}) => {
  try {
    const response = await addVideoToPlaylistService({
      video,
      token,
      playlistId,
    });
    if (response.status === 201) {
      const { data } = response;
      playlistDispatch({
        type: "ADD_VIDEO_TO_PLAYLIST",
        payload: data,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export { addVideoToPlaylistHandler };
