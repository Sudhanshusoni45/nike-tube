import { Link } from "react-router-dom";
import { useState } from "react";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  return (
    <>
      <div className="login_component">
        <form action="" className="login_form" onSubmit={loginHandler}>
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
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              value={user.password}
              onChange={changeHandler}
            />
          </div>

          <div>
            <input type="checkbox" name="rememberMe" />
            <label className="margin-left-xxs" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <Link to={"#"}>
            <small>Forgot your password</small>
          </Link>
          <Link to={"/signup"}> New here? Create a new account </Link>

          <button className="btn login_btn">Login</button>
        </form>
      </div>
    </>
  );
};

export { Login };
