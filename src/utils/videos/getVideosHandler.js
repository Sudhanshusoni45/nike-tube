import { getVideosService } from "../../services";

const getVideosHandler = async () => {
  try {
    const response = await getVideosService();
    console.log("response:", response);
  } catch (error) {
    console.log(error);
  }
};

export { getVideosHandler };
