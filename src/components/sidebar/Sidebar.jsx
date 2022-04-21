import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar_list list_reset">
        <li>
          <i className="sidebar_icon fas fa-home"></i>

          <span>Home</span>
        </li>
        <li>
          <Link to={"/"}>
            <i className="sidebar_icon fas fa-compass"></i>
            <span>Explore</span>
          </Link>
        </li>
        <li>
          <i className="sidebar_icon fas fa-list-ul"></i>

          <span>Playlist</span>
        </li>
        <li>
          <Link to={"/watchlater"}>
            <i className="sidebar_icon fas fa-bookmark watchlater_icon"></i>
            <span>Watchlater</span>
          </Link>
        </li>
        <li>
          <Link to={"/liked"}>
            <i className="sidebar_icon fas fa-thumbs-up"></i>
            <span>Liked</span>
          </Link>
        </li>
        <li>
          <i className="sidebar_icon fas fa-history"></i>
          <span>History</span>
        </li>
        <li>
          <i className="sidebar_icon fas fa-cog"></i>

          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export { Sidebar };
