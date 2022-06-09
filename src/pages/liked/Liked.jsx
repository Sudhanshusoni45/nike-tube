import { useEffect } from "react";
import { Navbar, Sidebar } from "../../components";
import { useLiked } from "../../context";
import { useAuth } from "../../context/auth-context";
import { getLikedVideoHandler } from "../../utils/likedVideo/getLikedVideoHandler";
import "./liked.css";
const Liked = () => {
  const {
    authState: { token },
  } = useAuth();
  const { likedState, likedDispatch } = useLiked();
  useEffect(() => getLikedVideoHandler({ token, likedDispatch }), []);
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
