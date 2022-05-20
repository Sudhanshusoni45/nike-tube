import { createContext, useContext, useReducer } from "react";
import { watchlaterReducer } from "../reducer";

const WatchlaterContext = createContext();
const initialState = [];
const WatchlaterProvider = ({ children }) => {
  const [watchlaterState, watchlaterDispatch] = useReducer(
    watchlaterReducer,
    initialState
  );
  return (
    <WatchlaterContext.Provider value={{ watchlaterState, watchlaterDispatch }}>
      {children}
    </WatchlaterContext.Provider>
  );
};

const useWatchlater = () => useContext(WatchlaterContext);

export { WatchlaterProvider, useWatchlater };
