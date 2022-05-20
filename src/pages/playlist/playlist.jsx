import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const Navigate = useNavigate();
  const clickHandler = (playlistId) => {
    Navigate(`/singleplaylist/${playlistId}`);
  };

  return (
    <>
      <div className="playlist_sidebar_container">
        <Sidebar />
        <div className="playlist_tile_container">
          {playlistState.length !== 0 ? (
            playlistState.map(({ title, _id: playlistId }) => (
              <li
                className="list_reset playlist_tile_list"
                key={playlistId}
                onClick={() => clickHandler(playlistId)}
              >
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
