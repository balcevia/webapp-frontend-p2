import React from 'react';
import * as Cookie from 'js-cookie';
import {Redirect, Route} from 'react-router';

const SecureRoute = ({component: Component, ...rest}) => {
  const token = Cookie.get("AuthToken");
  return (
    <Route {...rest} exact render={(props) => (
      token ? <Component {...props}/> : <Redirect to="/login"/>
    )}/>
  )
};

export default SecureRoute;