import { createContext, useContext, useReducer } from "react";

const PlaylistContext = createContext();
const PlaylistProvider = ({ children }) => {
  return (
    <PlaylistContext.Provider value={{}}>{children}</PlaylistContext.Provider>
  );
};

export { PlaylistProvider };
