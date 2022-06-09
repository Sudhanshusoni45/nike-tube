import { toast } from "react-toastify";
import { removeFromLikeService } from "../../services";

const removeFromLikeHandler = async ({ _id, token, likedDispatch }) => {
  try {
    const response = await removeFromLikeService({ _id, token });
    if (response.status === 200) {
      const { data } = response;
      likedDispatch({ type: "REMOVE_FROM_LIKE", payload: data });
      toast.info("video removed from liked videos");
    }
  } catch (error) {
    console.error(error);
  }
};

export { removeFromLikeHandler };
