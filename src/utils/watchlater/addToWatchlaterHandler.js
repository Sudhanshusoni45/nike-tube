import { toast } from "react-toastify";
import { addToWatchlaterService } from "../../services";

const addToWatchlaterHandler = async ({ token, watchlaterDispatch, video }) => {
  try {
    const response = await addToWatchlaterService({
      token,
      video,
      watchlaterDispatch,
    });
    if (response.status === 201) {
      const { data } = response;
      watchlaterDispatch({ type: "ADD_TO_WATCHLATER", payload: data });
      toast.success("video added to watchlater");
    }
  } catch (error) {
    console.error(error);
  }
};

export { addToWatchlaterHandler };
