import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const AuthContext = createContext();
const initialState = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
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
