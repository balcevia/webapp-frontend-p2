import React from 'react';
import RegistrationForm from "../components/RegistrationForm";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import loginOperationsCreator from "../../login/duck/operations";

const RegistrationFormContainer = ({loginOperations}) => (
  <RegistrationForm onSubmit={loginOperations.createUser}/>
);

const mapDispatchToProps = (dispatch) => ({
  loginOperations: bindActionCreators(loginOperationsCreator, dispatch),
});

export default connect(null, mapDispatchToProps)(RegistrationFormContainer);