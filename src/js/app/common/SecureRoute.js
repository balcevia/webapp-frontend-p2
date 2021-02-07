import React from 'react';
import * as Cookie from 'js-cookie';
import {Redirect, Route} from 'react-router';

const SecureRoute = ({component: Component, requiredRoles, ...rest}) => {
  const token = Cookie.get("AuthToken");
  const role = Cookie.get("Role");
  return (
    <Route {...rest} exact render={(props) => (
        (token && requiredRoles.includes(role)) ? <Component {...props}/> : <Redirect to="/login"/>
    )}/>
  )
};

export default SecureRoute;