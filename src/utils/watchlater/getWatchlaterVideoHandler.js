import { getWatchlaterVideoService } from "../../services";

const getWatchlaterVideoHandler = async ({ token, watchlaterDispatch }) => {
  try {
    const response = await getWatchlaterVideoService(token);
    console.log("response watchlater vid hand:", response);
  } catch (error) {
    console.error(error);
  }
};

export { getWatchlaterVideoHandler };
