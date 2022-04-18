import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const RequiresAuth = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();
  const location = useLocation();
  return token !== null ? (
    children
  ) : (
    <Navigate to={"/login"} replace state={{ from: location }} />
  );
};

export { RequiresAuth };
