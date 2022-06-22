import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Navbar } from "../../components";
import { useAuth } from "../../context";
import { logout } from "../../redux/slice/authSlice";

const Logout = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(logout());

    Navigate("/login");
    toast.success("Logged out successfully");
  };
  return (
    <>
      <Navbar />
      <button className="btn" onClick={clickHandler}>
        Logout
      </button>
    </>
  );
};

export { Logout };
