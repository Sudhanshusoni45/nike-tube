import { useNavigate } from "react-router-dom";
import { usePlaylistModal } from "../../context";
import { showPlaylistModalHandler } from "../../utils";
import "./card.css";

const Card = ({ _id, title, channelName, thumbNail }) => {
  const navigate = useNavigate();
  const { playlistModalDispatch } = usePlaylistModal();
  const playlistIconClickHandler = () => {
    showPlaylistModalHandler(playlistModalDispatch);
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
            className="transparent_btn card_action_btn"
            onClick={(e) => e.stopPropagation()}
          >
            <i className="far fa-bookmark action_icon"></i>
          </button>

          <button
            title="playlist"
            className="transparent_btn card_action_btn"
            onClick={(e) => {
              playlistIconClickHandler();
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
