import { addVideoToHistoryService } from "../../services";

const addVideoToHistoryHandler = async ({ token, video, historyDispatch }) => {
  try {
    const response = await addVideoToHistoryService({ token, video });
    if (response.status === 201) {
      const { data } = response;
      historyDispatch({ type: "ADD_VIDEO_TO_HISTORY", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { addVideoToHistoryHandler };
