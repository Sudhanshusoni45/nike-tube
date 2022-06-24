import { toast } from "react-toastify";
import { removeFromWatchLater } from "../../redux/thunk/watchlaterThunk";
import {
  addToWatchlaterService,
  removeFromWatchlaterService,
} from "../../services";

const removeFromWatchlaterHandler = async ({ dispatch, token, _id }) => {
  try {
    const {
      payload: { status },
    } = await dispatch(removeFromWatchLater({ token, _id }));
    if (status === 200) {
      toast.info("video removed from watchlater");
    }
  } catch (error) {
    console.error(error);
  }
};

export { removeFromWatchlaterHandler };
