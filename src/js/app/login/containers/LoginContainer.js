import React from 'react';
import LoginForm from "../components/LoginForm";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import loginOperationsCreator from '../duck/operations';
import {push} from 'connected-react-router';

const LoginContainer = ({loginOperations, data, redirect}) => {
  return (
    <LoginForm data={data} onSubmit={loginOperations.login} redirect={() => redirect("/registration")}/>
  )
};

const mapStateToProps = (state) => ({
  data: state.user.formValues
});

const mapDispatchToProps = (dispatch) => ({
  loginOperations: bindActionCreators(loginOperationsCreator, dispatch),
  redirect: (path) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);