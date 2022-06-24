import { toast } from "react-toastify";
import { signup } from "../../redux/thunk";

const signupHandler = async ({ newUser, navigate, dispatch }) => {
  try {
    const { payload } = await dispatch(signup(newUser));
    if (payload.status === 201) {
      navigate("/");
      toast.success("Signed up successfully");
    }
  } catch (error) {
    console.error(error);
  }
};

export { signupHandler };
