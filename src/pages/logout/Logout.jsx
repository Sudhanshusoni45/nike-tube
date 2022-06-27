import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Navbar } from "../../components";
import { logout, selectAuth } from "../../redux/slice/authSlice";
import "./logout.css";

const Logout = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    user: { firstName, lastName, email },
  } = useSelector(selectAuth);
  const clickHandler = () => {
    dispatch(logout());

    Navigate("/login");
    toast.success("Logged out successfully");
  };
  return (
    <>
      <Navbar />
      <div className="profile-page-container">
        <div className="profile-container">
          <div className="profile">
            <h2 className="profile-page-heading">Profile Details</h2>
            <div>
              <div>
                <h3 className="display-inline-block ">Name : </h3>
                <span>
                  {firstName} {lastName}
                </span>
              </div>
              <div className="small_margin_top">
                <h3 className="display-inline-block">Email : </h3>
                <span> {email}</span>
              </div>
            </div>
            <h2 className="profile-page-heading">Account</h2>
            <button className="btn logout-btn " onClick={clickHandler}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Logout };
