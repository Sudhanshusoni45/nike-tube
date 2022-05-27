import { toast } from "react-toastify";
import {
  addToWatchlaterService,
  removeFromWatchlaterService,
} from "../../services";

const removeFromWatchlaterHandler = async ({
  watchlaterDispatch,
  token,
  _id,
}) => {
  try {
    const response = await removeFromWatchlaterService({ token, _id });
    if (response.status === 200) {
      const { data } = response;
      watchlaterDispatch({ type: "REMOVE_FROM_WATCHLATER", payload: data });
      toast.info("video removed from watchlater");
    }
  } catch (error) {
    console.error(error);
  }
};

export { removeFromWatchlaterHandler };
