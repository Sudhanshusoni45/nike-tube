import { toast } from "react-toastify";
import { removeFromLikeVideo } from "../../redux/thunk/likeVideoThunk";
import { removeFromLikeService } from "../../services";

const removeFromLikeHandler = async ({
  _id,
  token,
  likedDispatch,
  dispatch,
}) => {
  try {
    const {
      payload: { status },
    } = await dispatch(removeFromLikeVideo({ _id, token }));
    if (status === 200) {
      toast.info("video removed from liked videos");
    }
  } catch (error) {
    console.error(error);
  }
};

export { removeFromLikeHandler };
