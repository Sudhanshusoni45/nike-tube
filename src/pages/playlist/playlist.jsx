import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Sidebar, PlaylistTile, Navbar } from "../../components";
import { selectAuth } from "../../redux/slice/authSlice";
import { getPlaylistHandler } from "../../utils";
import "./playlist.css";
import { useDispatch } from "react-redux";
import { selectPlaylist } from "../../redux/slice/playlistSlice";

const Playlist = () => {
  const { token } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const playlistState = useSelector(selectPlaylist);

  const Navigate = useNavigate();
  const clickHandler = (playlistId) => {
    Navigate(`/singleplaylist/${playlistId}`);
  };

  useEffect(() => getPlaylistHandler({ token, dispatch }), []);

  return (
    <>
      <Navbar />
      <div className="playlist_sidebar_container">
        <Sidebar />
        <div className="playlist_tile_container">
          {playlistState.length ? (
            playlistState.map(({ title, _id: playlistId }) => (
              <li
                className="list_reset playlist_tile_list"
                key={playlistId}
                onClick={() => clickHandler(playlistId)}
              >
                <PlaylistTile
                  title={title}
                  playlistId={playlistId}
                  token={token}
                />
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
