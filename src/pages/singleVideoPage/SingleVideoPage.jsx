import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  addToLikeVideoHandler,
  addToPlaylistHandler,
  addToWatchlaterHandler,
  addVideoToHistoryHandler,
  getSingleVideoHandler,
  removeFromLikeHandler,
  removeFromWatchlaterHandler,
  showPlaylistModalHandler,
} from "../../utils";
import {
  useAuth,
  useHistory,
  useLiked,
  usePlaylistModal,
  useWatchlater,
} from "../../context";
import "./singleVideoPage.css";
import { Navbar, PlaylistModal, Sidebar } from "../../components";
import { selectAuth } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectHistory } from "../../redux/slice/historySlice";

const SingleVideoPage = () => {
  const [video, setVideo] = useState({});
  const { likedState, likedDispatch } = useLiked();
  const dispatch = useDispatch();

  const { token } = useSelector(selectAuth);
  const { watchlaterState, watchlaterDispatch } = useWatchlater();
  const historyState = useSelector(selectHistory);
  const {
    playlistModalDispatch,
    playlistModalState: { showPlaylistModal },
  } = usePlaylistModal();
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
    console.log("_id:", _id);
    const res = historyState.some((item) => item._id === _id);
    return res;
  };

  const onVideoStartHandler = () => {
    console.log(historyState);
    console.log(checkInHistory(_id));
    checkInHistory(_id)
      ? null
      : addVideoToHistoryHandler({ token, video, dispatch });
  };

  useEffect(() => getSingleVideoHandler({ _id, setVideo }), []);
  return (
    <>
      <Navbar />
      {showPlaylistModal ? <PlaylistModal /> : null}
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
              <button
                className="transparent_btn single_video_action_btn"
                onClick={() => likeHandler(_id)}
              >
                <i
                  className={`${
                    checkIsLiked(_id) ? "fas" : "far"
                  } fa-thumbs-up `}
                  onClick={() => likeHandler(_id)}
                ></i>
                <span> Like</span>
              </button>
              <button
                className="transparent_btn single_video_action_btn"
                onClick={() => watchlaterHandler(video)}
              >
                <i
                  className={`single_video_action_btn ${
                    checkInWatchlater(_id) ? "fas" : "far"
                  } fa-bookmark`}
                ></i>
                <span> Later</span>
              </button>
              <button
                className="transparent_btn single_video_action_btn"
                title="add to playlist"
                onClick={() =>
                  showPlaylistModalHandler({
                    playlistModalDispatch,
                    video,
                  })
                }
              >
                <i className="fas fa-folder-plus"></i>
                <span> Save</span>
              </button>
            </div>
          </div>

          <div className="video_details_bottom">
            <li className="stacked-list-item">
              <img
                src="https://picsum.photos/200/300"
                alt="random image"
                className="avatar"
              />
              <div className="stacked-list-content">
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
