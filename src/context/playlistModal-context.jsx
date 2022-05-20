import { createContext, useContext, useReducer } from "react";
import { playlistModalReducer } from "../reducer";

const PlaylistModalContext = createContext();
const initialState = [];
const PlaylistModalProvider = ({ children }) => {
  const [playlistModalState, playlistModalDispatch] = useReducer(
    playlistModalReducer,
    initialState
  );
  return (
    <PlaylistModalContext.Provider
      value={{ playlistModalState, playlistModalDispatch }}
    >
      {children}
    </PlaylistModalContext.Provider>
  );
};

const usePlaylistModal = () => useContext(PlaylistModalContext);

export { PlaylistModalProvider, usePlaylistModal };
