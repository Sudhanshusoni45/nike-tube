import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  addToLikeVideoHandler,
  getSingleVideoHandler,
  removeFromLikeHandler,
} from "../../utils";
import { useAuth, useLiked } from "../../context";
import "./singleVideoPage.css";
import { Sidebar } from "../../components";
const SingleVideoPage = () => {
  const [video, setVideo] = useState({});
  const { likedState, likedDispatch } = useLiked();
  const {
    authState: { token },
  } = useAuth();
  const { youtubeId } = video;
  const { _id } = useParams();
  const checkIsLiked = (_id) => likedState.some((item) => item._id === _id);
  const likeHandler = (_id) => {
    if (token === null) {
      alert("login to like a video");
    } else {
      const isLiked = checkIsLiked(_id);
      isLiked
        ? removeFromLikeHandler({ _id, token, likedDispatch })
        : addToLikeVideoHandler({ _id, token, video, likedDispatch });
    }
  };
  const watchlaterHandler = () => {};

  useEffect(() => getSingleVideoHandler({ _id, setVideo }), []);
  return (
    <>
      <div className="sidebar_reactPlayer_container">
        <Sidebar />
        <div>
          <ReactPlayer
            url={`https://www.youtube.com/embed/${youtubeId}`}
            controls={true}
          />
          <div className="action_btns">
            <i
              className={`${checkIsLiked(_id) ? "fas" : "far"} fa-thumbs-up`}
              onClick={() => likeHandler(_id)}
            ></i>
            <i className={`far fa-bookmark`} onClick={watchlaterHandler}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export { SingleVideoPage };
