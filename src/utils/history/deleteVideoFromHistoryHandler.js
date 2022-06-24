import { deleteVideoFromHistory } from "../../redux/thunk";

const deleteVideoFromHistoryHandler = async ({ token, _id, dispatch }) => {
  try {
    await dispatch(deleteVideoFromHistory({ _id, token }));
  } catch (error) {
    console.error(error);
  }
};

export { deleteVideoFromHistoryHandler };
