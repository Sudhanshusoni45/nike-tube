import { toast } from "react-toastify";
import { useAuth } from "../../context/auth-context";
import { login } from "../../redux/thunk/authThunk";
import { loginService } from "../../services";
import { useDispatch } from "react-redux";

const loginHandler = async ({
  user: userCred,
  navigate,
  location,
  dispatch,
}) => {
  try {
    const {
      payload: { token, status, user },
    } = await dispatch(login(userCred));
    if (status === 200) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate(location?.state?.from?.pathname || "/", { replace: true });
      toast.success("logged in successfully");
    }
  } catch (err) {
    console.error(err);
  }
};

export { loginHandler };
