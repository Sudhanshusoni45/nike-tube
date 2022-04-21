import { getWatchlaterVideoService } from "../../services";

const getWatchlaterVideoHandler = async ({ token, watchlaterDispatch }) => {
  try {
    const response = await getWatchlaterVideoService(token);
    console.log("response watchlater vid hand:", response);
    if (response.status === 200) {
      const { data } = response;
      watchlaterDispatch({ type: "INITIALIZE", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { getWatchlaterVideoHandler };
