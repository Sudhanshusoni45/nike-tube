import { useAuth } from "../../context/auth-context";
import { loginService } from "../../services";

const loginHandler = async ({ user, authDispatch }) => {
  try {
    const response = await loginService(user);
    console.log("response:", response);
    if (response.status === 200) {
      const { encodedToken: token, foundUser: user } = response.data;
      authDispatch({
        type: "LOGIN",
        payload: { token, user },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export { loginHandler };
