import { useEffect } from "react";
import { useAuth, useWatchlater } from "../../context";
import { getWatchlaterVideoHandler } from "../../utils";
const Watchlater = () => {
  const {
    authState: { token },
  } = useAuth();
  const { watchlaterState, watchlaterDispatch } = useWatchlater();
  useEffect(() => getWatchlaterVideoHandler({ token, watchlaterDispatch }), []);

  return (
    <>
      {watchlaterState.length !== 0 ? (
        watchlaterState.map((item) => (
          <li key={item._id} className="list_reset">
            <h1>{item.title}</h1>
            <img src={item.thumbNail} alt="" />
          </li>
        ))
      ) : (
        <h1>There is nothing in your watchlist...</h1>
      )}
    </>
  );
};

export { Watchlater };
