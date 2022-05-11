import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";

//const user = null
//const user = { id:1 , userName: 'Raul'}
const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth()
  console.log(auth.user)
  
  return <Route {...rest}>
    {auth.user ? (<Component/>) : (<Redirect to="login" />)}
    <Component/>
  </Route>
}

export default PrivateRoute;
