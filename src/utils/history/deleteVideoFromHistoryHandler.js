import { deleteVideoFromHistory } from "../../redux/thunk";
import { deleteVideoFromHistoryService } from "../../services";

const deleteVideoFromHistoryHandler = async ({ token, _id, dispatch }) => {
  try {
    const response = await dispatch(deleteVideoFromHistory({ _id, token }));
  } catch (error) {
    console.error(error);
  }
};

export { deleteVideoFromHistoryHandler };
