import { useEffect } from "react";
import { useAuth, useWatchlater } from "../../context";
import { getWatchlaterVideoHandler } from "../../utils";
const Watchlater = () => {
  const {
    authState: { token },
  } = useAuth();
  const { watchlaterState, watchlaterDispatch } = useWatchlater();
  useEffect(() => getWatchlaterVideoHandler({ token, watchlaterDispatch }), []);
  useEffect(() => console.log("watchlaterState", watchlaterState));
  return (
    <>
      {watchlaterState.length !== 0 ? (
        watchlaterState.map((item) => <h1>{item.title}</h1>)
      ) : (
        <h1>There is nothing in your watchlist...</h1>
      )}
    </>
  );
};

export { Watchlater };
