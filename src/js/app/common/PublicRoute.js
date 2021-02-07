import React from 'react';
import * as Cookie from 'js-cookie';
import {Redirect, Route} from 'react-router';
import {UserRole} from "../constants";

const PublicRoute = ({component: Component, ...rest}) => {
  const token = Cookie.get("AuthToken");
  const role = Cookie.get("Role");

  const redirectPath = role === UserRole.Sender ? "/main/packages" : "/main/add-courier-package";
  return (
    <Route {...rest} exact render={(props) => (
      token ? <Redirect to={redirectPath}/> : <Component {...props}/>
    )}/>
  )
};

export default PublicRoute;