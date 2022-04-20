import { getVideosService } from "../../services";

const getVideosHandler = async (setExploreVideos) => {
  try {
    const response = await getVideosService();
    if (response.status === 200) {
      const {
        data: { videos },
      } = response;
      setExploreVideos((prevVideos) => [...prevVideos, ...videos]);
    }
  } catch (error) {
    console.log(error);
  }
};

export { getVideosHandler };
