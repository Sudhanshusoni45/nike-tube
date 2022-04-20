import { addToLikeVideoService } from "../../services";

const addToLikeVideoHandler = async ({ token, likedDispatch, video }) => {
  console.log("addToLikeVideoHandler ran");
  try {
    const response = await addToLikeVideoService({ token, video });
  } catch (error) {
    console.log(error);
  }
};

export { addToLikeVideoHandler };
