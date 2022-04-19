import { getLikedVideoService } from "../../services";

const getLikedVideoHandler = async ({ token, likedDispatch }) => {
  try {
    const response = await getLikedVideoService(token);
    console.log("response:", response);
    if (response.status === 200) {
      const { data } = response;
      likedDispatch({ type: "GET_LIKES", payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};

export { getLikedVideoHandler };
