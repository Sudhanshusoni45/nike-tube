import { getSingleVideoService } from "../../services";

const getSingleVideoHandler = async ({ _id, setVideo }) => {
  try {
    const response = await getSingleVideoService(_id);
    if (response.status === 200) {
      setVideo((prevVideo) => response.data.video);
    }
  } catch (error) {
    console.error(error);
  }
};

export { getSingleVideoHandler };
