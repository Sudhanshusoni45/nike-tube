import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./navbar.css";

const Navbar = () => {
  const {
    authState: { token },
  } = useAuth();
  return (
    <header className="navigation">
      <div>
        <i className="fas fa-bars"></i>
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
