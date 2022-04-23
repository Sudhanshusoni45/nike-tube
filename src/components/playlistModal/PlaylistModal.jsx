import { useState } from "react";
import { usePlaylistModal } from "../../context";
import { hidePlaylistModalHandler } from "../../utils";
import "./playlistModal.css";

const PlaylistModal = () => {
  const { playlistModalState, playlistModalDispatch } = usePlaylistModal();
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const { showNewPlaylistInput } = playlistModalState;
  const changeHandler = (e) => {
    setNewPlaylistName((prevName) => e.target.value);
  };
  const createNewPlaylistHandler = () => {
    playlistModalDispatch({
      type: "TOGGLE_NEWPLAYLIST_INPUT",
      payload: { showNewPlaylistInput: true },
    });
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
              className="transparent_btn"
              onClick={closeBtnHandler}
            >
              <i className="fas fa-times modal_close_btn"></i>
            </button>
          </div>
          <div className="modal_body">
            <ul className="list_reset">
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Dummy playlist</label>
              </li>
            </ul>
          </div>
          <div className="modal_footer">
            {showNewPlaylistInput ? (
              <div className="input-group">
                <input
                  type="text"
                  name="newPlaylistName"
                  id="newPlaylistName"
                  placeholder="Enter playlist name..."
                  className="newPlaylistName_input"
                  onChange={changeHandler}
                  value={newPlaylistName}
                />
              </div>
            ) : null}
            <div>
              <i className="fas fa-plus"></i>
              <button
                className="transparent_btn"
                onClick={createNewPlaylistHandler}
              >
                {" "}
                Create a new playlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PlaylistModal };
