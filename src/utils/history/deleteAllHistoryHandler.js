import { deleteAllHistoryService } from "../../services";

const deleteAllHistoryHandler = async ({ token, historyDispatch }) => {
  try {
    const response = await deleteAllHistoryService(token);
    if (response.status === 200) {
      const { data } = response;
      historyDispatch({ type: "DELETE_ALL_HISTORY", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { deleteAllHistoryHandler };
