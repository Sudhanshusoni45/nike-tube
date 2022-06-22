import { toast } from "react-toastify";
import { signup } from "../../redux/thunk";
import { signupService } from "../../services";

const signupHandler = async ({ newUser, navigate, dispatch }) => {
  try {
    const response = await signupService(newUser);
    const res = await dispatch(signup(newUser));
    console.log("res:", res);
    if (response.status === 201) {
      navigate("/");
      toast.success("Signed up successfully");
    }
  } catch (error) {
    console.error(error);
  }
};

export { signupHandler };
