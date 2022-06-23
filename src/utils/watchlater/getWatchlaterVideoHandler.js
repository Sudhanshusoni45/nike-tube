import { getWatchLaterVideo } from "../../redux/thunk/watchlaterThunk";

const getWatchlaterVideoHandler = async ({ token, dispatch }) => {
  try {
    await dispatch(getWatchLaterVideo(token));
  } catch (error) {
    console.error(error);
  }
};

export { getWatchlaterVideoHandler };
