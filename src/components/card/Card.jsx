import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { selectAuth } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { showPlaylistModal } from "../../redux/slice/playlistModalSlice";

import {
  addToWatchlaterHandler,
  removeFromWatchlaterHandler,
} from "../../utils";
import "./card.css";
import { selectWatchLater } from "../../redux/slice/watchLaterSlice";

const Card = ({ _id, title, channelName, thumbNail }) => {
  const navigate = useNavigate();
  const { token } = useSelector(selectAuth);

  const dispatch = useDispatch();

  const watchlaterState = useSelector(selectWatchLater);

  const checkInWatchlater = (_id) =>
    watchlaterState.some((item) => item._id === _id);

  const watchlaterIconClickHandler = (video) => {
    if (token !== null) {
      const { _id } = video;
      checkInWatchlater(_id)
        ? (() => {
            removeFromWatchlaterHandler({
              dispatch,
              token,
              _id,
            });
          })()
        : (() => {
            addToWatchlaterHandler({
              token,
              video,
              dispatch,
            });
          })();
    } else {
      toast.warning("Login to add to watchlater");
    }
  };
  const playlistIconClickHandler = (video) => {
    if (token !== null) {
      dispatch(showPlaylistModal({ video }));
    } else {
      alert("Login to add to playlist");
    }
  };
  return (
    <div
      className="videoCard_container"
      onClick={() => navigate(`/singleVideoPage/${_id}`)}
    >
      <div className="videoCard">
        <img src={thumbNail} alt="" className="videoCard_thumbnail" />
        <div className="card_action_btns_container ">
          <button
            title="watchlater"
            className="transparent_btn card_action_btn"
            onClick={(e) => {
              watchlaterIconClickHandler({
                _id,
                title,
                channelName,
                thumbNail,
              });
              e.stopPropagation();
            }}
          >
            <i
              className={`${
                checkInWatchlater(_id) ? "fas" : "far"
              } fa-bookmark action_icon`}
            ></i>
          </button>

          <button
            title="playlist"
            className="transparent_btn card_action_btn"
            onClick={(e) => {
              playlistIconClickHandler({ _id, title, channelName, thumbNail });
              e.stopPropagation();
            }}
          >
            <i className="fas fa-folder-plus action_icon"></i>
          </button>
        </div>
      </div>
      <div className="videoCard_body">
        <img
          src="https://picsum.photos/200/300"
          alt="dummy-images"
          className="avatar"
        />
        <div className="videoCard_body_content">
          <h3>{title}</h3>
          <small>{channelName}</small>
          <div>
            <small>112 views</small>
            <small> • </small>
            <small>7 days ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
