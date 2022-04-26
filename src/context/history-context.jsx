import { createContext, useContext, useReducer } from "react";
const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  return (
    <HistoryContext.Provider value={{}}>{children}</HistoryContext.Provider>
  );
};

export { HistoryProvider };
