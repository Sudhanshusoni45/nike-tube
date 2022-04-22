import { addToPlaylistService } from "../../services";

const addToPlaylistHandler = async ({ token, playlistDispatch }) => {
  try {
    const response = addToPlaylistService(token);
    console.log("response:", response);
    if (response.status === 201) {
      const { data } = response;
      playlistDispatch({ type: "ADD_TO_PLAYLIST", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { addToPlaylistHandler };
