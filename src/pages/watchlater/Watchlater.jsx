import { useEffect } from "react";
import { useAuth } from "../../context";
import { getWatchlaterVideoHandler } from "../../utils";
const Watchlater = () => {
  const {
    authState: { token },
  } = useAuth();
  useEffect(() => getWatchlaterVideoHandler({ token }));
  return <>Watchlater</>;
};

export { Watchlater };
