import { useEffect } from "react";
import { Sidebar } from "../../components";
import { useAuth, useHistory } from "../../context";
import { getHistoryHandler } from "../../utils";

const History = () => {
  const { historyState, historyDispatch } = useHistory();
  const {
    authState: { token },
  } = useAuth();
  useEffect(
    () => getHistoryHandler({ token, historyDispatch }),
    [historyState]
  );

  return (
    <>
      <div className="display_flex">
        <Sidebar />
        <div className="history_list">
          {historyState.length !== 0
            ? historyState.map(({ title, thumbNail }) => (
                <div>
                  <li className="list_reset">
                    <h1>{title}</h1>
                    <img src={thumbNail} alt="" />
                  </li>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export { History };
