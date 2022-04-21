import { createContext, useContext, useReducer } from "react";

const WatchlaterContext = createContext();

const WatchlaterProvider = ({ children }) => {
  return (
    <WatchlaterContext.Provider value={{}}>
      {children}
    </WatchlaterContext.Provider>
  );
};

export { WatchlaterProvider };
