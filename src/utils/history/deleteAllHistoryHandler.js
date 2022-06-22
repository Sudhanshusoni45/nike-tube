import { deleteAllHistory } from "../../redux/thunk";
import { deleteAllHistoryService } from "../../services";

const deleteAllHistoryHandler = async ({ token, dispatch }) => {
  try {
    await dispatch(deleteAllHistory(token));
  } catch (error) {
    console.error(error);
  }
};

export { deleteAllHistoryHandler };
