import { signupService } from "../../services";

const signupHandler = async ({ authDispatch, newUser }) => {
  try {
    const response = await signupService();
    if (response.status === 201) {
      const { encodedToken: token, createdUser: user } = response.data;
      authDispatch({ type: "SIGNUP", payload: { token, user } });
    }
  } catch (error) {
    console.error(error);
  }
};

export { signupHandler };
