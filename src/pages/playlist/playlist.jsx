import { useEffect } from "react";
import { useAuth, usePlaylist } from "../../context";
import { getPlaylistHandler } from "../../utils";

const Playlist = () => {
  const {
    authState: { token },
  } = useAuth();
  const { playlistState, playlistDispatch } = usePlaylist();
  useEffect(() => getPlaylistHandler({ token, playlistDispatch }), []);
  useEffect(() => console.log(playlistState));

  return (
    <>
      {playlistState.length !== 0 ? (
        playlistState.map((item) => <>item</>)
      ) : (
        <h1>You dont have any playlist yet...</h1>
      )}
    </>
  );
};

export { Playlist };
