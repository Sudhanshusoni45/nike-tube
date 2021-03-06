import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar, Sidebar } from "../../components";
import { usePlaylist } from "../../context";
import "./singlePlaylist.css";
import { deleteVideoFromPlaylistHandler } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../redux/slice/authSlice";
import { selectPlaylist } from "../../redux/slice/playlistSlice";

const SinglePlaylist = () => {
  const [playlist, setPlaylist] = useState({
    videos: [],
  });
  const Navigate = useNavigate();
  const { playlistId } = useParams();
  const dispatch = useDispatch();

  const playlistState = useSelector(selectPlaylist);
  const { token } = useSelector(selectAuth);

  const getSinglePlaylist = () => {
    const playlist = playlistState.find((item) => item._id === playlistId);
    if (playlist) {
      setPlaylist((prevPlaylist) => playlist);
    }
  };
  const clickHandler = (_id) => {
    Navigate(`/singlevideopage/${_id}`);
  };
  const deleteVideoHandler = (_id, e) => {
    e.stopPropagation();
    deleteVideoFromPlaylistHandler({
      _id,
      token,
      playlistId,
      dispatch,
    });
  };
  useEffect(getSinglePlaylist, [playlistState]);
  return (
    <>
      <Navbar />
      <div className="display_flex">
        <Sidebar />
        <div>
          {playlist.videos.length !== 0 ? (
            playlist.videos.map(({ title, _id, thumbNail, channelName }) => (
              <li
                key={_id}
                onClick={() => clickHandler(_id)}
                className="list_reset stacked-list-item playlist_video"
              >
                <img
                  src={thumbNail}
                  alt={title}
                  className="playlist_video_thumbnail"
                />
                <div className="stacked-list-content">
                  <h3>{title}</h3>
                  <span>{channelName}</span>
                </div>
                <i
                  className="fas fa-trash stacked-list-icon"
                  onClick={(e) => deleteVideoHandler(_id, e)}
                ></i>
              </li>
            ))
          ) : (
            <h1>This playlist is empty...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export { SinglePlaylist };
