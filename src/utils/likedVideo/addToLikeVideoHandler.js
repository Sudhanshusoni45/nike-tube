import { toast } from "react-toastify";
import { addToLikeVideoService } from "../../services";

const addToLikeVideoHandler = async ({ token, likedDispatch, video }) => {
  try {
    const response = await addToLikeVideoService({ token, video });
    if (response.status === 201) {
      const { data } = response;
      likedDispatch({ type: "ADD_TO_LIKE", payload: data });
      toast.info("video added to liked videos");
    }
  } catch (error) {
    console.error(error);
  }
};

export { addToLikeVideoHandler };
