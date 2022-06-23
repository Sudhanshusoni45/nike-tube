import { getLikeVideo } from "../../redux/thunk/likeVideoThunk";

const getLikedVideoHandler = async ({ token, dispatch }) => {
  const response = await dispatch(getLikeVideo(token));
};

export { getLikedVideoHandler };
