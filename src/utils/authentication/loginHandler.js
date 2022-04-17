import { loginService } from "../../services";

const loginHandler = async (user) => {
  try {
    const response = await loginService(user);
  } catch (err) {
    console.log(err);
  }
};

export { loginHandler };
