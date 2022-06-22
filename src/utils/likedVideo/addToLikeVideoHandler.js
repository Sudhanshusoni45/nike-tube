import { toast } from "react-toastify";
import { addToLikeVideo } from "../../redux/thunk/likeVideoThunk";
import { addToLikeVideoService } from "../../services";

const addToLikeVideoHandler = async ({ token, video, dispatch }) => {
  try {
    const returnFromDispatch = await dispatch(addToLikeVideo({ video, token }));
    console.log("returnFromDispatch:", returnFromDispatch);
    //   toast.info("video added to liked videos");
    // }
  } catch (error) {
    console.error(error);
  }
};

export { addToLikeVideoHandler };
