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
      navigate(location?.state?.from?.pathname || "/", { replace: true });
    }
  } catch (err) {
    console.log(err);
  }
};

export { loginHandler };
