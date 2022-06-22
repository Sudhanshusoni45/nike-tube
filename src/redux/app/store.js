const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "../slice/authSlice";
import historyReducer from "../slice/historySlice";

export const store = configureStore({
  reducer: { auth: authReducer, history: historyReducer },
});
