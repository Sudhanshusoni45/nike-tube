import { createContext, useContext, useReducer } from "react";

const LikedContext = createContext();
const LikedContextProvider = ({ children }) => {
  <LikedContext.Provider value={{}}>{children}</LikedContext.Provider>;
};

export { LikedContextProvider };
