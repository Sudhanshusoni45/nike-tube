import { getHistoryService } from "../../services";

const getHistoryHandler = async (token) => {
  try {
    const response = await getHistoryService();
    console.log("response:", response);
    if (response === 200) {
    }
  } catch (error) {
    console.error(error);
  }
};

export { getHistoryHandler };
