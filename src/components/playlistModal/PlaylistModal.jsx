import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePlaylist } from "../../context";
import { selectAuth } from "../../redux/slice/authSlice";
import {
  hidePlaylistModal,
  selectPlaylistModal,
  toggleNewPlaylistInput,
} from "../../redux/slice/playlistModalSlice";
import { selectPlaylist } from "../../redux/slice/playlistSlice";
import { addToPlaylistHandler, addVideoToPlaylistHandler } from "../../utils";
import "./playlistModal.css";

const PlaylistModal = () => {
  const dispatch = useDispatch();
  const playlistState = useSelector(selectPlaylist);

  const playlistModalState = useSelector(selectPlaylistModal);
  const { video } = playlistModalState;

  const [newPlaylistTitle, setNewPlaylistTitle] = useState("");
  const { token } = useSelector(selectAuth);

  const { playlistDispatch } = usePlaylist();
  const { showNewPlaylistInput } = playlistModalState;

  const changeHandler = (e) => {
    setNewPlaylistTitle((prevName) => e.target.value);
  };

  const newPlaylistInputHandler = () => {
    dispatch(toggleNewPlaylistInput({ showNewPlaylistInput: true }));
  };

  const addNewPlaylistHandler = () => {
    dispatch(toggleNewPlaylistInput({ showNewPlaylistInput: true }));
    addToPlaylistHandler({
      token,
      newPlaylistTitle,
      dispatch,
    });
    setNewPlaylistTitle((prevTitle) => "");
  };
  const closeBtnHandler = () => {
    dispatch(hidePlaylistModal());
  };
  const checkboxHandler = (playlistId) => {
    checkVideoInPlaylist(playlistId)
      ? alert("video already in playlist")
      : addVideoToPlaylistHandler({
          token,
          video,
          playlistDispatch,
          playlistId,
          dispatch,
        });
  };
  const checkVideoInPlaylist = (playlistId) => {
    const playlist = playlistState.find((item) => item._id === playlistId);
    if (playlist) {
      return playlist.videos.some((item) => item._id === video._id);
    } else return false;
  };
  return (
    <>
      <div className="modal">
        <div className="modal_content">
          <div className="modal_header">
            <h4 className="modal_title">Save to...</h4>
            <button
              title="closeBtn"
              className="transparent_btn modal_close_btn"
              onClick={closeBtnHandler}
            >
              <i className="fas fa-times modal_close_btn"></i>
            </button>
          </div>
          <div className="modal_body">
            <ul className="list_reset">
              {playlistState.length !== 0 ? (
                playlistState.map(({ _id: playlistId, title }) => (
                  <li key={playlistId} className="xsmall_margin_bottom">
                    <input
                      type="checkbox"
                      name={title}
                      id={title}
                      checked={checkVideoInPlaylist(playlistId)}
                      onChange={() => checkboxHandler(playlistId)}
                    />
                    <label className="small_left_margin" htmlFor={title}>
                      {title}
                    </label>
                  </li>
                ))
              ) : (
                <li>You have not created any playlist...</li>
              )}
            </ul>
          </div>
          <div className="modal_footer">
            {showNewPlaylistInput ? (
              <div className="input-group">
                <input
                  type="text"
                  name="newPlaylistTitle"
                  id="newPlaylistTitle"
                  placeholder="Enter playlist name..."
                  className="newPlaylistName_input"
                  onChange={changeHandler}
                  value={newPlaylistTitle}
                />
                <button
                  title="create"
                  className="transparent_btn"
                  onClick={addNewPlaylistHandler}
                >
                  create
                </button>
              </div>
            ) : null}
            {!showNewPlaylistInput ? (
              <div>
                <button
                  className="transparent_btn"
                  onClick={newPlaylistInputHandler}
                >
                  <i className="fas fa-plus"></i>
                  <span> Create a new playlist</span>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export { PlaylistModal };
