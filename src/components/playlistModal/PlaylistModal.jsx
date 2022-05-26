import { useState } from "react";
import { useAuth, usePlaylist, usePlaylistModal } from "../../context";
import {
  addToPlaylistHandler,
  addVideoToPlaylistHandler,
  hidePlaylistModalHandler,
} from "../../utils";
import "./playlistModal.css";

const PlaylistModal = () => {
  const {
    playlistModalState,
    playlistModalState: { video },
    playlistModalDispatch,
  } = usePlaylistModal();
  const [newPlaylistTitle, setNewPlaylistTitle] = useState("");
  const {
    authState: { token },
  } = useAuth();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { showNewPlaylistInput } = playlistModalState;
  const changeHandler = (e) => {
    setNewPlaylistTitle((prevName) => e.target.value);
  };
  const newPlaylistInputHandler = () => {
    playlistModalDispatch({
      type: "TOGGLE_NEWPLAYLIST_INPUT",
      payload: { showNewPlaylistInput: true },
    });
  };
  const addNewPlaylistHandler = () => {
    playlistModalDispatch({
      type: "TOGGLE_NEWPLAYLIST_INPUT",
      payload: { showNewPlaylistInput: false },
    });
    addToPlaylistHandler({ token, playlistDispatch, newPlaylistTitle });
    setNewPlaylistTitle((prevTitle) => "");
  };
  const closeBtnHandler = () => {
    hidePlaylistModalHandler(playlistModalDispatch);
  };
  const checkboxHandler = (playlistId) => {
    checkVideoInPlaylist(playlistId)
      ? alert("video already in playlist")
      : addVideoToPlaylistHandler({
          token,
          video,
          playlistDispatch,
          playlistId,
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
                  <li key={playlistId}>
                    <input
                      type="checkbox"
                      name={title}
                      id={title}
                      checked={checkVideoInPlaylist(playlistId)}
                      onChange={() => checkboxHandler(playlistId)}
                    />
                    <label htmlFor={title}>{title}</label>
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
