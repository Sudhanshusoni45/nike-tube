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
  const checkInHistory = (_id) => {
    const res = historyState.some((item) => item._id === _id);
    console.log("res:", res);
    return res;
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
            <h1>This playlist is empty...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export { History };
