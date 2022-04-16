import { Link } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  return (
    <>
      <div className="signup_component">
        <form action="" className="signup_form">
          <h1>Signup</h1>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />

            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" />
          </div>
          <div>
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label className="margin-left-xxs" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a href="">
            <small>Forgot your password</small>
          </a>
          <Link to={"/login"}>Already have an account ? Login instead</Link>

          <button className="btn login-btn">SignUp</button>
        </form>
      </div>
    </>
  );
};

export { Signup };
