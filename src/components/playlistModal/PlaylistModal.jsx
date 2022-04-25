import { useState, useEffect } from "react";
import { useAuth, usePlaylist, usePlaylistModal } from "../../context";
import { addToPlaylistHandler, hidePlaylistModalHandler } from "../../utils";
import "./playlistModal.css";

const PlaylistModal = () => {
  const { playlistModalState, playlistModalDispatch } = usePlaylistModal();
  const [newPlaylistTitle, setNewPlaylistTitle] = useState("");
  const {
    authState: { token },
  } = useAuth();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { showNewPlaylistInput } = playlistModalState;
  const changeHandler = (e) => {
    console.log(e.target.value);
    setNewPlaylistTitle((prevName) => e.target.value);
  };
  useEffect(() => console.log("playlistState", playlistState));
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
  };
  const closeBtnHandler = () => {
    hidePlaylistModalHandler(playlistModalDispatch);
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
                playlistState.map(({ _id, title }) => (
                  <li key={_id}>
                    <input type="checkbox" name={title} id={title} />
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
                  Create a new playlist
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
