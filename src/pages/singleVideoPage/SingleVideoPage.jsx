import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleVideoHandler } from "../../utils";
const SingleVideoPage = () => {
  const [video, setVideo] = useState({});
  const { youtubeId } = video;
  const { _id } = useParams();
  useEffect(() => getSingleVideoHandler({ _id, setVideo }));
  return (
    <>
      <ReactPlayer
        url={`https://www.youtube.com/embed/${youtubeId}`}
        controls={true}
      />
      <i className="fas fa-thumbs-up"></i>
    </>
  );
};

export { SingleVideoPage };
