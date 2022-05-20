import { getHistoryService } from "../../services";

const getHistoryHandler = async ({ token, historyDispatch }) => {
  try {
    const response = await getHistoryService(token);
    if (response.status === 201) {
      const { data } = response;
      historyDispatch({ type: "INITIALIZE_HISTORY", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { getHistoryHandler };
