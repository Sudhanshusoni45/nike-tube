import { getVideosService } from "../../services";

const getVideosHandler = async () => {
  try {
    const response = await getVideosService();
  } catch (error) {
    console.log(error);
  }
};

export { getVideosHandler };
