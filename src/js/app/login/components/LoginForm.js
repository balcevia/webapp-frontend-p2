import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/form/formFields";
import {FormNames} from "../../constants";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./LoginForm.scss";
import Button, {ButtonType} from "../../common/Button";
import {required} from "../../validators/required";

const LoginForm = ({onClick, handleSubmit, redirect}) => {
  return (
    <div className="login-form-container">
      <Card>
        <Card.Body>
          <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Row className="login-form-row">
              <Form.Label column lg={3}>Username</Form.Label>
              <Field component={Input} name="email" placeholder="Enter Email" validate={required}/>
            </Form.Row>
            <Form.Row className="login-form-row">
              <Form.Label column lg={3}>Password</Form.Label>
              <Field component={Input} type="password" name="password" label="Password" placeholder="Enter Password"
                     validate={required}/>
            </Form.Row>
            <div className="login-form-actions">
              <Button title="Sign In" type="submit"/>
              <Button title="Sign Up" variant={ButtonType.Success} onClick={redirect}/>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
};

export default reduxForm({form: FormNames.LoginForm})(LoginForm);