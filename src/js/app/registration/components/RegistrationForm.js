import React from 'react';
import {Field} from "redux-form";
import {Input, DatePicker, Select} from "../../common/form/formFields";
import {FormNames} from "../../constants";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from "../../common/Button";
import {required} from "../../validators/required";
import './RegistrationForm.scss';
import {validatePassword, validatePasswordEquality} from "../../validators/passwordValidators";
import {emailValidator} from "../../validators/emailValidator";
import {formWrapper} from "../../common/form/formWrapper";
import {dateValidator} from '../../validators/dateValidator';
import {countryList} from '../../constants';
import {onlyLettersValidator} from "../../validators/stringValidators";
import {peselValidator} from "../../validators/peselValidator";

const RegistrationForm = ({handleSubmit}) => {
    return (
        <div className="registration-form-container">
            <Card>
                <Card.Body>
                    <Form className="registration-form" onSubmit={handleSubmit}>
                        <Form.Row className="registration-form-row">
                            <Form.Label column lg={3}>Username</Form.Label>
                            <Field component={Input} name="email" placeholder="Enter Email"
                                   validate={[required, emailValidator]}/>
                        </Form.Row>
                        <Form.Row className="registration-form-row">
                            <Form.Label column lg={3}>Password</Form.Label>
                            <Field component={Input} type="password" name="password" label="Password"
                                   placeholder="Enter Password"
                                   validate={[required, validatePassword]}/>
                        </Form.Row>
                        <Form.Row className="registration-form-row">
                            <Form.Label column lg={3}>Confirm Password</Form.Label>
                            <Field component={Input} type="password" name="confirmPassword" label="Password"
                                   placeholder="Confirm Password"
                                   validate={[required, validatePasswordEquality]}/>
                        </Form.Row>
                        <Form.Row className="registration-form-row">
                            <Form.Label column lg={3}>Name</Form.Label>
                            <Field component={Input} name="name" label="Name" placeholder="Enter Name"
                                   validate={[required, onlyLettersValidator]}/>
                        </Form.Row>
                        <Form.Row className="registration-form-row">
                            <Form.Label column lg={3}>Surname</Form.Label>
                            <Field component={Input} name="surname" label="Surname" placeholder="Enter Surname"
                                   validate={[required, onlyLettersValidator]}/>
                        </Form.Row>
                        <Form.Row className="registration-form-row">
                            <Form.Label column lg={3}>Date Of Birth</Form.Label>
                            <Field component={DatePicker} name="dateOfBirth" label="Date Of Birth"
                                   placeholder="Enter Date Of Birth"
                                   validate={[required, dateValidator]}/>
                        </Form.Row>
                        <Form.Row className="registration-form-row">
                            <Form.Label column lg={3}>Street Address</Form.Label>
                            <Field component={Input} name="streetAddress" label="streetAdress"
                                   placeholder="Enter Street Address"
                                   validate={[required]}/>
                            <Form.Label column lg={3}>Building Number</Form.Label>
                            <Field component={Input} name="buildingNumber" label="Building Number"
                                   placeholder="Enter Building Number"
                                   validate={[required]}/>
                        </Form.Row>
                        <Form.Row className="registration-form-row">
                            <Form.Label column lg={3}>Postal Code</Form.Label>
                            <Field component={Input} name="postalCode" label="Postal Code"
                                   placeholder="Enter Postal Code"
                                   validate={[required]}/>
                            <Form.Label column lg={3}>Country</Form.Label>
                            <Field component={Select} name="country" label="Country" placeholder="Enter Country"
                                   validate={[required]}>
                                {countryList.map(c => (<option key={c} value={c}>{c}</option>))}
                            </Field>
                        </Form.Row>
                        <Form.Row className="registration-form-row">
                            <Form.Label column lg={3}>Pesel</Form.Label>
                            <Field component={Input} name="pesel" label="Pesel" placeholder="Enter Pesel"
                                   validate={[required, peselValidator]}/>
                        </Form.Row>
                        <div className="registration-form-actions">
                            <Button title="Sign Up" type="submit"/>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
};

export default formWrapper({form: FormNames.RegistrationForm})(RegistrationForm);