import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Sidebar } from "../../components";
import { selectAuth } from "../../redux/slice/authSlice";
import { selectHistory } from "../../redux/slice/historySlice";
import {
  deleteAllHistoryHandler,
  deleteVideoFromHistoryHandler,
  getHistoryHandler,
} from "../../utils";
import "./history.css";

const History = () => {
  const { token } = useSelector(selectAuth);

  const historyState = useSelector(selectHistory);
  const dispatch = useDispatch();

  const clickHandler = () => {
    deleteAllHistoryHandler({ token, dispatch });
  };

  const deleteVideoHandler = (_id, e) => {
    e.stopPropagation();
    deleteVideoFromHistoryHandler({ _id, token, dispatch });
  };

  useEffect(() => getHistoryHandler({ token, dispatch }), []);

  return (
    <>
      <Navbar />

      <div className="display_flex sidebar_historylist_container ">
        <Sidebar />
        <div className="history_list ">
          {historyState.length !== 0 ? (
            historyState.map(({ title, _id, thumbNail, channelName }) => (
              <li
                key={_id}
                onClick={() => clickHandler(_id)}
                className="list_reset stacked-list-item playlist_video"
              >
                <img
                  src={thumbNail}
                  alt={title}
                  className="playlist_video_thumbnail"
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
            <h1 className="medium_top_margin">
              Start watching some videos to get a watch history...
            </h1>
          )}
        </div>
        {historyState.length ? (
          <button
            className="btn clear_history_btn medium_top_margin"
            onClick={clickHandler}
          >
            Clear History
          </button>
        ) : null}
      </div>
    </>
  );
};

export { History };
