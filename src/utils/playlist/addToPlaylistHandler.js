import { addToPlaylistService } from "../../services";

const addToPlaylistHandler = async ({
  token,
  playlistDispatch,
  newPlaylistTitle,
}) => {
  try {
    const response = await addToPlaylistService({ token, newPlaylistTitle });
    if (response.status === 201) {
      const { data } = response;
      playlistDispatch({ type: "ADD_TO_PLAYLIST", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { addToPlaylistHandler };
