import { usePlaylist } from "../../context";
import { deletePlaylistHandler } from "../../utils";
import "./playlistTile.css";

const PlaylistTile = ({ title, playlistId, token }) => {
  const { playlistDispatch } = usePlaylist();
  return (
    <>
      <div className="playlistTile">
        <div className="playlist_video_count_container">
          <span>1 video</span>
          <i className="fab fa-youtube playlist_youtube_icon"></i>
        </div>
        <h3>{title}</h3>
        <button
          className="transparent_btn playlist_delete_btn"
          onClick={(e) => {
            e.stopPropagation();
            deletePlaylistHandler({ playlistId, token, playlistDispatch });
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export { PlaylistTile };
