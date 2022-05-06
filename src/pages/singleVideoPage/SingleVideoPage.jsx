import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  addToLikeVideoHandler,
  addToWatchlaterHandler,
  addVideoToHistoryHandler,
  getSingleVideoHandler,
  removeFromLikeHandler,
  removeFromWatchlaterHandler,
} from "../../utils";
import { useAuth, useHistory, useLiked, useWatchlater } from "../../context";
import "./singleVideoPage.css";
import { Sidebar } from "../../components";
const SingleVideoPage = () => {
  const [video, setVideo] = useState({});
  const { likedState, likedDispatch } = useLiked();
  const {
    authState: { token },
  } = useAuth();
  const { watchlaterState, watchlaterDispatch } = useWatchlater();
  const { historyState, historyDispatch } = useHistory();
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
  const checkInWatchlater = (_id) =>
    watchlaterState.some((item) => item._id === _id);

  const watchlaterHandler = (video) => {
    if (token === null) {
      alert("please login to add a video to wathclater");
    } else {
      checkInWatchlater(_id)
        ? removeFromWatchlaterHandler({ watchlaterDispatch, _id, token })
        : addToWatchlaterHandler({ video, watchlaterDispatch, token });
    }
  };
  const checkInHistory = (_id) => {
    const res = historyState.some((item) => item._id === _id);
    return res;
  };
  const onVideoStartHandler = () => {
    checkInHistory(_id)
      ? null
      : addVideoToHistoryHandler({ token, video, historyDispatch });
  };

  useEffect(() => getSingleVideoHandler({ _id, setVideo }), []);
  return (
    <>
      <div className="sidebar_reactPlayer_container">
        <Sidebar />
        <div className="react_player_container">
          <ReactPlayer
            url={`https://www.youtube.com/embed/${youtubeId}`}
            controls={true}
            onStart={onVideoStartHandler}
            width={"100%"}
            height={"100%"}
          />
          <h2 className="video_title">{video.title}</h2>
          <div className="video_details">
            <span>11M views</span>
            <div className="action_btns_container">
              <i
                className={`${checkIsLiked(_id) ? "fas" : "far"} fa-thumbs-up `}
                onClick={() => likeHandler(_id)}
              ></i>
              <span> Like</span>
              <i
                className={`single_video_action_btn ${
                  checkInWatchlater(_id) ? "fas" : "far"
                } fa-bookmark`}
                onClick={() => watchlaterHandler(video)}
              ></i>
              <span> Later</span>
              <i className="single_video_action_btn fas fa-folder-plus"></i>
              <span> Save</span>
            </div>
          </div>

          <div className="video_details_bottom">
            <li class="stacked-list-item">
              <img
                src="https://picsum.photos/200/300"
                alt="random image"
                class="avatar"
              />
              <div class="stacked-list-content">
                <h3>List Heading</h3>
                <small>10M Subscribers</small>
              </div>
            </li>
            <p className="video_description">{video.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { SingleVideoPage };
