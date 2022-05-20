import { Link } from "react-router-dom";
import "./mobileDrawer.css";
const MobileDrawer = () => {
  return (
    <div className="mobile_drawer">
      <i className="mobile_drawer_icon fas fa-home"></i>
      <Link to={"/"}>
        <i className="mobile_drawer_icon fas fa-compass"></i>
      </Link>
      <Link to={"/watchlater"}>
        <i className="mobile_drawer_icon fas fa-bookmark"></i>
      </Link>
      <Link to={"#"}>
        <i className="mobile_drawer_icon fas fa-cog"></i>
      </Link>
    </div>
  );
};

export { MobileDrawer };
