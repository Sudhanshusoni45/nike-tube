import { useEffect } from "react";
import { Sidebar, PlaylistTile } from "../../components";
import { useAuth, usePlaylist } from "../../context";
import { getPlaylistHandler } from "../../utils";
import "./playlist.css";

const Playlist = () => {
  const {
    authState: { token },
  } = useAuth();
  const { playlistState, playlistDispatch } = usePlaylist();
  useEffect(() => getPlaylistHandler({ token, playlistDispatch }), []);
  useEffect(() => console.log(playlistState));

  return (
    <>
      <div className="playlist_sidebar_container">
        <Sidebar />
        <div className="playlist_tile_container">
          {playlistState.length !== 0 ? (
            playlistState.map(({ title }) => (
              <li className="list_reset playlist_tile_list">
                <PlaylistTile title={title} />
              </li>
            ))
          ) : (
            <h1>You dont have any playlist yet...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export { Playlist };
