import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged } from "../redux/selectors";

const PublicRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
