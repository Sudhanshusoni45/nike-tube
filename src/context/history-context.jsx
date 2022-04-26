import { createContext, useContext, useReducer } from "react";
const HistoryContext = createContext();
const initialState = [];

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(
    historyReducer,
    initialState
  );
  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

export { HistoryProvider };
