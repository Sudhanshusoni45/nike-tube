import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Sidebar } from "../../components";
import { selectAuth } from "../../redux/slice/authSlice";
import { selectWatchLater } from "../../redux/slice/watchLaterSlice";
import {
  getWatchlaterVideoHandler,
  removeFromWatchlaterHandler,
} from "../../utils";
import "./watchlater.css";

const Watchlater = () => {
  const { token } = useSelector(selectAuth);

  const watchlaterState = useSelector(selectWatchLater);
  const dispatch = useDispatch();
  useEffect(() => getWatchlaterVideoHandler({ token, dispatch }), []);

  return (
    <>
      <Navbar />
      <div className="display_flex sidebar_watchlater_container">
        <Sidebar />
        <div className="medium_top_margin">
          {watchlaterState.length !== 0 ? (
            watchlaterState.map(({ _id, thumbNail, title, channelName }) => (
              <li key={_id} className="list_reset stacked-list-item">
                <img
                  src={thumbNail}
                  alt=""
                  className="watchlater_video_thumbnail "
                />
                <div className="stacked-list-content">
                  <h3>{title}</h3>
                  <span>{channelName}</span>
                </div>
                <i
                  className="fas fa-trash stacked-list-icon cursor_pointer"
                  onClick={(e) =>
                    removeFromWatchlaterHandler({ dispatch, token, _id })
                  }
                ></i>
              </li>
            ))
          ) : (
            <h1>There is nothing in your watchlist...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export { Watchlater };
