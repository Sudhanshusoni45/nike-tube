import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar_icons">
        <i>
          <i className="fas fa-home">Home</i>
        </i>
        <i>
          <i className="fas fa-compass">Explore</i>
        </i>
        <i className="fas fa-list-ul">Playlist</i>
        <li>
          <i className="fas fa-bookmark">Watchlater</i>
        </li>
        <li>
          <i className="fas fa-history">History</i>
        </li>
        <li>
          <i className="fas fa-cog">Settings</i>
        </li>
      </ul>
    </div>
  );
};

export { Sidebar };
