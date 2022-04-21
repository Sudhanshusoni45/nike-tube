import { createContext, useContext, useReducer } from "react";

const PlaylistContext = createContext();
const initialState = [];
const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    initialState
  );
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export { PlaylistProvider };
