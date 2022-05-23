import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context";
import "./navbar.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const {
    authState: { token },
  } = useAuth();
  const searchInputHandler = (e) => {
    setSearchQuery((prevQuery) => e.target.value);
  };
  return (
    <header className="navigation">
      <div>{/* <i className="fas fa-bars"></i> */}</div>
      <div>
        <input
          type="text"
          placeholder="Search videos"
          value={searchQuery}
          onChange={searchInputHandler}
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/login"}>
              {token !== null ? (
                <button className="btn">Logout</button>
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
