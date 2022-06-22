const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "../slice/authSlice";

export const store = configureStore({
  reducer: { auth: authReducer },
});
