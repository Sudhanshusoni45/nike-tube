import { toast } from "react-toastify";
import { addToLikeVideo } from "../../redux/thunk/likeVideoThunk";

const addToLikeVideoHandler = async ({ token, video, dispatch }) => {
  try {
    const {
      payload: { status },
    } = await dispatch(addToLikeVideo({ video, token }));
    if (status === 201) {
      toast.info("video added to liked videos");
    }
  } catch (error) {
    console.error(error);
  }
};

export { addToLikeVideoHandler };
