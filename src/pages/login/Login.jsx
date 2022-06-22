import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import { loginHandler } from "../../utils";
import { useAuth } from "../../context/auth-context";
import { Navbar } from "../../components";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { authDispatch } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler({ user, authDispatch, navigate, location, dispatch });
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleTestCredentials = (e) => {
    setUser({
      email: "johndoe@gmail.com",
      password: "johnDoe123",
    });
  };
  return (
    <>
      <Navbar />
      <div className="login_component">
        <form action="" className="login_form" onSubmit={submitHandler}>
          <h1>Login</h1>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="John@gmail.com"
              value={user.email}
              onChange={changeHandler}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              value={user.password}
              onChange={changeHandler}
              required
            />
          </div>

          <Link to={"#"}>
            <small>Forgot your password</small>
          </Link>
          <Link to={"/signup"}> New here? Create a new account </Link>

          <button className="btn login_btn" onClick={handleTestCredentials}>
            Test login
          </button>
          <button className="btn login_btn">Login</button>
        </form>
      </div>
    </>
  );
};

export { Login };
