import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { useAuth } from "../../context";

const Logout = () => {
  const { authDispatch } = useAuth();
  const Navigate = useNavigate();
  const clickHandler = () => {
    authDispatch({ type: "LOGOUT", payload: { token: null, user: null } });
    Navigate("/login");
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
