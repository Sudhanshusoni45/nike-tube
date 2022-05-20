import { useEffect } from "react";
import { Sidebar } from "../../components";
import { useAuth, useHistory } from "../../context";
import {
  deleteAllHistoryHandler,
  deleteVideoFromHistoryHandler,
  getHistoryHandler,
} from "../../utils";
import "./history.css";

const History = () => {
  const { historyState, historyDispatch } = useHistory();
  const {
    authState: { token },
  } = useAuth();
  useEffect(
    () => getHistoryHandler({ token, historyDispatch }),
    [historyState]
  );
  const clickHandler = () => {
    deleteAllHistoryHandler({ token, historyDispatch });
  };

  const deleteVideoHandler = (_id, e) => {
    e.stopPropagation();
    deleteVideoFromHistoryHandler({ _id, token, historyDispatch });
  };
  return (
    <>
      <div className="display_flex">
        <Sidebar />
        <div className="history_list">
          <button className="btn" onClick={clickHandler}>
            Clear History
          </button>
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
            <h1>Start watching some videos to get a watch history...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export { History };
