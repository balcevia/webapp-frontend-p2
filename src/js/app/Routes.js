import React from 'react';
import {history} from "../store";
import LoginContainer from "./login/containers/LoginContainer";
import MainContainer from "./main/containers/MainContainer";
import {Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import SecureRoute from "../app/common/SecureRoute";
import PublicRoute from "./common/PublicRoute";
import RegistrationFormContainer from "./registration/containers/RegistrationFromContainer";
import {UserRole} from "./constants";

const Routes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <PublicRoute path="/login" component={LoginContainer}/>
            <PublicRoute exact path="/" component={LoginContainer}/>
            <PublicRoute exact path="/registration" component={RegistrationFormContainer}/>
            <SecureRoute path="/main" component={MainContainer} requiredRoles={[UserRole.Sender, UserRole.Courier]}/>
        </Switch>
    </ConnectedRouter>
);

export default Routes;