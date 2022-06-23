import { getHistory } from "../../redux/thunk";
import { getHistoryService } from "../../services";

const getHistoryHandler = async ({ token, dispatch }) => {
  try {
    await dispatch(getHistory(token));
  } catch (error) {
    console.error(error);
  }
};

export { getHistoryHandler };
