import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { selectAuth } from "../../redux/slice/authSlice";
import "./navbar.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const res = useSelector(selectAuth);
  console.log("res:", res);
  const { token, user } = res;
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
