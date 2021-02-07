import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Button, {ButtonType} from "../common/Button";
import {bindActionCreators} from "redux";
import loginOperationsCreator from '../login/duck/operations';
import {connect} from 'react-redux';
import renderIf from 'render-if';
import logo from '../../../logo.png';
import {UserRole} from "../constants";
import * as Cookie from 'js-cookie';

const Navigation = ({loginOperations, loggedIn}) => {
    const role = Cookie.get("Role");
    return (
        <Navbar bg="dark" variant="dark" className="header">
            <Navbar.Brand href="/main/packages">
                <img
                    alt=""
                    src={logo}
                    width="40"
                    height="40"
                />
                POST-OUT
            </Navbar.Brand>
            {renderIf(!loggedIn)(() => (
                <Nav className="mr-auto" key="auth-nav">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/registration">Sign Up</Nav.Link>
                </Nav>
            ))}
            {renderIf(loggedIn)(() => [
                <Nav className="mr-auto" key="auth-nav">
                    {renderIf(role === UserRole.Sender)(() => [
                        <Nav.Link href="/main/packages" key="/main/packages">Packages</Nav.Link>,
                        <Nav.Link href="/main/new-package" key="/main/new-package">New Package</Nav.Link>
                    ])}
                    {renderIf(role === UserRole.Courier)(() => [
                        <Nav.Link href="/main/add-courier-package" key="/main/add-courier-package">Take Package</Nav.Link>,
                        <Nav.Link href="/main/courier-packages" key="/main/courier-packages">My Packages</Nav.Link>
                    ])}
                </Nav>,
                <Button variant={ButtonType.Info} title="Logout" onClick={loginOperations.logout} key="logout-button"/>
            ])}
        </Navbar>
    );
};

const mapStateToProps = (state) => ({
    loggedIn: state.user.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
    loginOperations: bindActionCreators(loginOperationsCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);