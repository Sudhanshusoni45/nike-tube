import { getLikedVideoService } from "../../services";

const getLikedVideoHandler = async (token) => {
  try {
    const response = await getLikedVideoService(token);
    console.log("response:", response);
    if (response.status === 200) {
    }
  } catch (error) {
    console.log(error);
  }
};

export { getLikedVideoHandler };
