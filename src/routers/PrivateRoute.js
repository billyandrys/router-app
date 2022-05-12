import React from "react";
import { useLocation } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";

//const user = null
//const user = { id:1 , userName: 'Raul'}
const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth()
  const location = useLocation()
 

  return (
    <Route {...rest}>
      {auth.islogged() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
      
    </Route>
  );
};

export default PrivateRoute;
