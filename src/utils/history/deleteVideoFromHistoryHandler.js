import { deleteVideoFromHistoryService } from "../../services";

const deleteVideoFromHistoryHandler = async ({
  token,
  _id,
  historyDispatch,
}) => {
  try {
    const response = await deleteVideoFromHistoryService({
      token,
      _id,
    });
    if (response.status === 200) {
      const { data } = response;
      historyDispatch({ type: "DELETE_VIDEO_FROM_HISTORY", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { deleteVideoFromHistoryHandler };
