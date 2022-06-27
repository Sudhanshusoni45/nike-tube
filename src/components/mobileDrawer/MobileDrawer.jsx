import { Link } from "react-router-dom";
import "./mobileDrawer.css";
const MobileDrawer = () => {
  return (
    <div className="mobile_drawer">
      <Link to={"/"}>
        <i className="mobile_drawer_icon fas fa-compass"></i>
      </Link>
      <Link to={"/playlist"}>
        <i className="mobile_drawer_icon fas fa-list-ul"></i>
      </Link>
      <Link to={"/liked"}>
        <i className="mobile_drawer_icon fas fa-thumbs-up"></i>
      </Link>
      <Link to={"/watchlater"}>
        <i className="mobile_drawer_icon fas fa-bookmark"></i>
      </Link>
      <Link to={"/history"}>
        <i className="mobile_drawer_icon fas fa-history"></i>
      </Link>
    </div>
  );
};

export { MobileDrawer };
