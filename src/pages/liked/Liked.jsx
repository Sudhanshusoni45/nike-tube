import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Sidebar } from "../../components";
import { selectAuth } from "../../redux/slice/authSlice";
import { selectLikeVideo } from "../../redux/slice/likeVideoSlice";
import { getLikedVideoHandler } from "../../utils/likedVideo/getLikedVideoHandler";
import "./liked.css";
const Liked = () => {
  const { token } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const likedState = useSelector(selectLikeVideo);
  useEffect(() => getLikedVideoHandler({ token, dispatch }), []);
  return (
    <>
      <Navbar />
      <div className="sidebar_likedVideos_container">
        <Sidebar />
        <div className="">
          {likedState.length ? (
            likedState.map(({ title, thumbNail, _id, channelName }) => (
              <li
                className="list_reset stacked-list-item likedVideos_list "
                key={_id}
              >
                <img
                  src={thumbNail}
                  alt={title}
                  className="list_video_thumbnail"
                />
                <div>
                  <h3>{title}</h3>
                  <span>{channelName}</span>
                </div>
              </li>
            ))
          ) : (
            <div className="medium_top_margin">
              <h1>You have not liked any video yet...</h1>
              <h1>Go like some videos already...</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { Liked };
