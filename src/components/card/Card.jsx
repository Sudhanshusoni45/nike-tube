import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({ _id, title, channelName, thumbNail }) => {
  const navigate = useNavigate();
  return (
    <div
      className="videoCard_container"
      onClick={() => navigate(`/singleVideoPage/${_id}`)}
    >
      <div className="videoCard">
        <img src={thumbNail} alt="" className="videoCard_thumbnail" />
        <div className="card_action_btns_container ">
          <button className="transparent_btn card_action_btn">
            <i className="far fa-bookmark action_icon"></i>
          </button>

          <button className="transparent_btn card_action_btn">
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
