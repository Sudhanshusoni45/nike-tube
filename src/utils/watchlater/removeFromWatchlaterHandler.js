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
    }
  } catch (error) {
    console.error(error);
  }
};

export { removeFromWatchlaterHandler };
