import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar_list list_reset">
        {/* commented on purpose */}
        {/* <li>
          <i className="sidebar_icon fas fa-home"></i>

          <span>Home</span>
        </li> */}
        <li>
          <Link className="sidebar_link" to={"/"}>
            <i className="sidebar_icon fas fa-compass"></i>
            <span>Explore</span>
          </Link>
        </li>
        <li>
          <Link className="sidebar_link" to={"/playlist"}>
            <i className="sidebar_icon fas fa-list-ul"></i>
            <span>Playlist</span>
          </Link>
        </li>
        <li>
          <Link className="sidebar_link" to={"/watchlater"}>
            <i className="sidebar_icon fas fa-bookmark watchlater_icon"></i>
            <span>Watchlater</span>
          </Link>
        </li>
        <li>
          <Link className="sidebar_link" to={"/liked"}>
            <i className="sidebar_icon fas fa-thumbs-up"></i>
            <span>Liked</span>
          </Link>
        </li>
        <li>
          <Link className="sidebar_link" to={"/history"}>
            <i className="sidebar_icon fas fa-history"></i>
            <span>History</span>
          </Link>
        </li>
        {/* commented on purpose */}
        {/* <li>
          <i className="sidebar_icon fas fa-cog"></i>

          <span>Settings</span>
        </li> */}
      </ul>
    </div>
  );
};

export { Sidebar };
