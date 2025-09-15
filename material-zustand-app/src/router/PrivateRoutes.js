// Library Imports
import { Navigate, Outlet } from "react-router-dom";

// Local Imports
import { useIsAuthenticatedUser } from "../utils/utils";

const PrivateRoutes = () => {
  return useIsAuthenticatedUser() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
