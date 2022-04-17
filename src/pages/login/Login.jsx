import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="login_component">
        <form action="" className="login_form">
          <h1>Login</h1>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
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
