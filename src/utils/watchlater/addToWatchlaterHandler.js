import { toast } from "react-toastify";
import { addToWatchLater } from "../../redux/thunk/watchlaterThunk";

const addToWatchlaterHandler = async ({ token, video, dispatch }) => {
  try {
    const {
      payload: { status },
    } = await dispatch(addToWatchLater({ video, token }));
    if (status === 201) {
      toast.success("video added to watchlater");
    }
  } catch (error) {
    console.error(error);
  }
};

export { addToWatchlaterHandler };
