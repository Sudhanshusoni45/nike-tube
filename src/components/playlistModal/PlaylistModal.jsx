import { useState } from "react";
import "./playlistModal.css";

const PlaylistModal = () => {
  return (
    <>
      <div className="modal">
        <div className="modal_content">
          <div className="modal_header">
            <h4 className="modal_title">Save to...</h4>
            <i className="fas fa-times modal_close_btn"></i>
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
            {true ? (
              <div className="input-group">
                <input
                  type="text"
                  name="newPlaylistName"
                  id="newPlaylistName"
                  placeholder="Enter playlist name..."
                  className="newPlaylistName_input"
                />
              </div>
            ) : null}
            <div>
              <i className="fas fa-plus"></i>
              <button className="only_text_btn"> Create a new playlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PlaylistModal };
