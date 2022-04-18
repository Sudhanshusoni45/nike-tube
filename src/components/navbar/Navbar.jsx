import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navigation">
      <div>
        <i className="fas fa-bars"></i>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/login"}>
              <button className="btn">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
