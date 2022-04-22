import { createContext, useContext, useReducer } from "react";

const PlaylistModalContext = createContext();
const initialState = [];
const PlaylistModalProvider = ({ children }) => {
  const [playlistmodalState, setPlaylistmodalState] = useReducer(
    playlistModalReducer,
    initialState
  );
  return (
    <PlaylistModalContext.Provider value={{}}>
      {children}
    </PlaylistModalContext.Provider>
  );
};

const usePlaylistModal = () => useContext(PlaylistModalContext);

export { PlaylistModalProvider, usePlaylistModal };
