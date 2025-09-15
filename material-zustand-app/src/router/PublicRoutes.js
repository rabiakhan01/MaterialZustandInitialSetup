import { Navigate, Outlet } from "react-router-dom";

//Local Imports
import { useIsAuthenticatedUser } from "../utils/utils";

const PublicRoutes = () => {
  return useIsAuthenticatedUser() ? <Navigate to="/home-page" /> : <Outlet />;
};

export default PublicRoutes;
