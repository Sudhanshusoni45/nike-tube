import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./navbar.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const {
    authState: {
      token,
      user: { firstName },
    },
  } = useAuth();
  const searchInputHandler = (e) => {
    setSearchQuery((prevQuery) => e.target.value);
  };
  return (
    <header className="navigation">
      <div>{/* <i className="fas fa-bars"></i> */}</div>
      <div className="">
        <input
          type="text"
          placeholder="Search videos"
          value={searchQuery}
          onChange={searchInputHandler}
          className="search_bar"
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/login"}>
              {token !== null ? (
                <Link to={"/logout"}>
                  <button className="transparent_btn username_btn">
                    <i className="fas fa-user"></i>
                    <span className="nav_username"> {firstName}</span>
                  </button>
                </Link>
              ) : (
                <button className="btn">Login</button>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
