import { createContext, useContext } from "react";

const PlaylistModalContext = createContext();
const PlaylistModalProvider = ({ children }) => {
  return (
    <PlaylistModalContext.Provider value={{}}>
      {children}
    </PlaylistModalContext.Provider>
  );
};

const usePlaylistModal = () => useContext(PlaylistModalContext);

export { PlaylistModalProvider, usePlaylistModal };
