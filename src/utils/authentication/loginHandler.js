import { useAuth } from "../../context/auth-context";
import { loginService } from "../../services";

const loginHandler = async ({ user, authDispatch, navigate, location }) => {
  try {
    const response = await loginService(user);
    if (response.status === 200) {
      const { encodedToken: token, foundUser: user } = response.data;
      authDispatch({
        type: "LOGIN",
        payload: { token, user },
      });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate(location?.state?.from?.pathname || "/", { replace: true });
    }
  } catch (err) {
    console.error(err);
  }
};

export { loginHandler };
