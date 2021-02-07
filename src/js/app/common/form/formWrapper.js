import React from "react";
import {getFormValues, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from 'react-redux';

export const formWrapper = (formProps) => {
  const mapStateToProps = (state) => ({
    formValues: getFormValues(formProps.form)(state)
  });

  return compose(
    connect(mapStateToProps),
    reduxForm(formProps)
  )
};