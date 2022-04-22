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
            <i className="fas fa-plus"></i>
            <span> Create a new playlist</span>
          </div>
        </div>
      </div>
    </>
  );
};

export { PlaylistModal };
