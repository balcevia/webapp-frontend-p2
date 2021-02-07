import React from 'react';
import _ from 'lodash';

const FormField = (WrappedComponent) => (props) => {
  const {input, meta: {touched, error}, ...other} = props;
  const otherProps = _.omit(other, ['validate']);

  return (
    <WrappedComponent {...input} id={input.name} {...otherProps} invalid={touched && error} error={error}/>
  )
};

export default FormField;