import { createContext, useContext, useReducer } from "react";
import { likedReducer } from "../reducer";

const LikedContext = createContext();
const initialState = [];
const LikedContextProvider = ({ children }) => {
  const [likedState, likedDispatch] = useReducer(likedReducer, initialState);
  return (
    <LikedContext.Provider value={{ likedState, likedDispatch }}>
      {children}
    </LikedContext.Provider>
  );
};

const useLiked = () => useContext(LikedContext);

export { LikedContextProvider, useLiked };
