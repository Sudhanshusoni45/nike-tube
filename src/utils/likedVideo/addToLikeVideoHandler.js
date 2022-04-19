import { addToLikeVideoService } from "../../services";

const addToLikeVideoHandler = async ({ token, likedDispatch, video }) => {
  console.log("addToLikeVideoHandler ran");
  try {
    const response = await addToLikeVideoService({ token, video });
    console.log("response addtolike:", response);
  } catch (error) {
    console.log(error);
  }
};

export { addToLikeVideoHandler };
