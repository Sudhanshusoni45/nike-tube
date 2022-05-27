import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Navbar } from "../../components";
import { useAuth } from "../../context";

const Logout = () => {
  const { authDispatch } = useAuth();
  const Navigate = useNavigate();
  const clickHandler = () => {
    authDispatch({ type: "LOGOUT", payload: { token: null, user: null } });
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
