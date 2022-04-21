import { signupService } from "../../services";

const signupHandler = async ({ authDispatch, newUser, navigate }) => {
  try {
    const response = await signupService(newUser);
    if (response.status === 201) {
      const { encodedToken: token, createdUser: user } = response.data;
      authDispatch({ type: "SIGNUP", payload: { token, user } });
      navigate("/");
    }
  } catch (error) {
    console.error(error);
  }
};

export { signupHandler };
