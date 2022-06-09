import { useEffect } from "react";
import { Navbar, Sidebar } from "../../components";
import { useAuth, useWatchlater } from "../../context";
import { getWatchlaterVideoHandler } from "../../utils";
import "./watchlater.css";

const Watchlater = () => {
  const {
    authState: { token },
  } = useAuth();
  const { watchlaterState, watchlaterDispatch } = useWatchlater();
  useEffect(() => getWatchlaterVideoHandler({ token, watchlaterDispatch }), []);

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
                  className="fas fa-trash stacked-list-icon"
                  onClick={(e) => deleteVideoHandler(_id, e)}
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
