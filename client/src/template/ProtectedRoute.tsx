import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/configStore";

const ProtectedRoute = () => {
  const userProfile = useSelector(
    (state: RootState) => state.authReducer.userProfile
  );
  if (JSON.stringify(userProfile) === "{}") {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
