import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context";
import { selectAuth } from "../../redux/slice/authSlice";
import "./navbar.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const { pathname } = useLocation();
  const res = useSelector(selectAuth);
  const { token, user } = res;
  const searchInputHandler = (e) => {
    setSearchQuery((prevQuery) => e.target.value);
  };
  return (
    <header className="navigation">
      <div>
        <Link to={"/"} className="link_reset logo_link">
          <h2 className="medium_left_margin">Nike Tube</h2>
        </Link>
      </div>
      {pathname === "/" ? (
        <div>
          <input
            type="text"
            placeholder="Search videos"
            value={searchQuery}
            onChange={searchInputHandler}
            className="search_bar"
          />
        </div>
      ) : null}
      <nav>
        <ul>
          <li>
            {token !== null ? (
              <Link to={"/logout"}>
                <button className="transparent_btn username_btn">
                  <i className="fas fa-user"></i>
                  <span className="nav_username"> {user.firstName}</span>
                </button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <button className="btn">Login</button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
