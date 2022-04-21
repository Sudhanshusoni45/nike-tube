import { createContext, useContext, useReducer } from "react";

const WatchlaterContext = createContext();

const WatchlaterProvider = ({ children }) => {
  return (
    <WatchlaterContext.Provider value={{}}>
      {children}
    </WatchlaterContext.Provider>
  );
};

const useWatchlater = () => useContext(WatchlaterContext);

export { WatchlaterProvider, useWatchlater };
