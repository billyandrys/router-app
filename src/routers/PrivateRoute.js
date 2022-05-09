import React from "react";
import { Route, Redirect } from "react-router-dom";

const user = null
//const user = { id:1 , userName: 'Raul'}
const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest}>{user ? <Component /> : <Redirect to="login" />}</Route>
};

export default PrivateRoute;
