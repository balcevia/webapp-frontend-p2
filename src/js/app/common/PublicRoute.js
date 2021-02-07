import React from 'react';
import * as Cookie from 'js-cookie';
import {Redirect, Route} from 'react-router';

const PublicRoute = ({component: Component, ...rest}) => {
  const token = Cookie.get("AuthToken");
  return (
    <Route {...rest} exact render={(props) => (
      token ? <Redirect to="/main/packages"/> : <Component {...props}/>
    )}/>
  )
};

export default PublicRoute;