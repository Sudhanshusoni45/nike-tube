import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectAuth } from "../../redux/slice/authSlice";

const RequiresAuth = ({ children }) => {
  const { token } = useSelector(selectAuth);
  const location = useLocation();
  return token !== null ? (
    children
  ) : (
    <Navigate to={"/login"} replace state={{ from: location }} />
  );
};

export { RequiresAuth };
