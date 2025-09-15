// Library Imports
import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Local Imports
import { privateRoutes, publicRoutes } from "./config";
import { useIsAuthenticatedUser } from "../utils/utils";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";

const Router = () => {
  return (
    <Fragment>
      <Routes>
        <Route
          path="*"
          element={
            useIsAuthenticatedUser() ? (
              <Navigate to="/properties" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route element={<PrivateRoutes />}>
          {privateRoutes?.map((route, index) =>
            route.child ? (
              route?.child?.map((childRoute, index) => (
                <>
                  <Route
                    path={route.path}
                    element={route.element}
                    key={index}
                  />
                  <Route
                    path={childRoute.path}
                    element={childRoute.element}
                    key={index}
                  />
                </>
              ))
            ) : (
              <Route path={route.path} element={route.element} key={index} />
            )
          )}
        </Route>
        <Route element={<PublicRoutes />}>
          {publicRoutes?.map((route, index) => {
            return (
              <Route path={route.path} element={route.element} key={index} />
            );
          })}
        </Route>
      </Routes>
    </Fragment>
  );
};

export default Router;
