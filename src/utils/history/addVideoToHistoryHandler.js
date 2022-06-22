import { addVideoToHistory } from "../../redux/thunk";
import { addVideoToHistoryService } from "../../services";

const addVideoToHistoryHandler = ({
  token,
  video,
  historyDispatch,
  dispatch,
}) => {
  try {
    dispatch(addVideoToHistory({ video, token }));
  } catch (error) {
    console.error(error);
  }
};

export { addVideoToHistoryHandler };
