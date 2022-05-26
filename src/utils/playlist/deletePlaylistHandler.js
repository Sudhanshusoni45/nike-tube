import { deletePlaylistService } from "../../services";

const deletePlaylistHandler = async ({
  playlistId,
  token,
  playlistDispatch,
}) => {
  try {
    const response = await deletePlaylistService({ playlistId, token });
    if (response.status === 200) {
      const { data } = response;
      playlistDispatch({ type: "DELETE_PLAYLIST", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { deletePlaylistHandler };
