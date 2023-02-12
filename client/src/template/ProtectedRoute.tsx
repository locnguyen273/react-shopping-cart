import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/configStore";

const ProtectedRoute = () => {
  const userProfile = useSelector(
    (state: RootState) => state.authReducer.userProfile
  );
  if (Object.keys(userProfile).length === 0) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
