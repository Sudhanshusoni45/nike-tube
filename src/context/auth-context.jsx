import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const AuthContext = createContext();
const initialTokenState = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
const initialUserState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  token: initialTokenState,
  user: initialUserState,
};
const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
