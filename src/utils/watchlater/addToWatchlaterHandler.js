import { addToWatchlaterService } from "../../services";

const addToWatchlaterHandler = async ({ token, watchlaterDispatch, video }) => {
  try {
    const response = await addToWatchlaterService({
      token,
      video,
      watchlaterDispatch,
    });
    console.log("response from addToWatchlater:", response);
    if (response.status === 201) {
      const { data } = response;
      watchlaterDispatch({ type: "ADD_TO_WATCHLATER", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { addToWatchlaterHandler };
