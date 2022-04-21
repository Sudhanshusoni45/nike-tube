import { getPlaylistService } from "../../services";

const getPlaylistHandler = async ({ token, playlistDispatch }) => {
  try {
    const response = await getPlaylistService(token);
    console.log("response:", response);
    if (response.status === 200) {
      const { data } = response;
      playlistDispatch({ type: "INITIALIZE", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { getPlaylistHandler };
