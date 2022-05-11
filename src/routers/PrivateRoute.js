import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";

//const user = null
//const user = { id:1 , userName: 'Raul'}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth()
  return <Route {...rest}>
    {auth.isLogged() ? <Component /> : <Redirect to="login" />}
  </Route>
};

export default PrivateRoute;
