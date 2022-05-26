import { deletePlaylistService } from "../../services";

const deletePlaylistHandler = async ({ playlistId, token }) => {
  try {
    const response = await deletePlaylistService({ playlistId, token });
    console.log("response:", response);
  } catch (error) {
    console.error(error);
  }
};

export { deletePlaylistHandler };
