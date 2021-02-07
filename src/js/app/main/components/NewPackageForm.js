import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Input, FileBase64} from "../../common/form/formFields";
import {required} from "../../validators/required";
import {formWrapper} from "../../common/form/formWrapper";
import {FormNames} from "../../constants";
import { Field } from "redux-form";
import './NewPackageForm.scss';
import Button from '../.././common/Button';

const NewPackageForm = ({handleSubmit}) => (
    <Card className="new-package-form-container">
        <Card.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Row className="package-form-row">
                    <Form.Label column lg={2}>Sender Name</Form.Label>
                    <Field component={Input} name="senderName" placeholder="Enter Sender Name" validate={required}/>
                    <Form.Label column lg={2}>Receiver Name</Form.Label>
                    <Field component={Input} name="receiverName" placeholder="Enter Receiver Name" validate={required}/>
                </Form.Row>
                <Form.Row className="package-form-row">
                    <Form.Label column lg={2}>Sender Surname</Form.Label>
                    <Field component={Input} name="senderSurname" placeholder="Enter Sender Surname" validate={required}/>
                    <Form.Label column lg={2}>Receiver Surname</Form.Label>
                    <Field component={Input} name="receiverSurname" placeholder="Enter Receiver Surname" validate={required}/>
                </Form.Row>
                <Form.Row className="package-form-row">
                    <Form.Label column lg={2}>Sender Address</Form.Label>
                    <Field component={Input} name="senderAddress" placeholder="Enter Sender Address" validate={required}/>
                    <Form.Label column lg={2}>Receiver Address</Form.Label>
                    <Field component={Input} name="receiverAddress" placeholder="Enter Receiver Address" validate={required}/>
                </Form.Row>
                <Form.Row className="package-form-row">
                    <Form.Label column lg={2}>Sender Phone Number</Form.Label>
                    <Field component={Input} name="senderPhoneNumber" placeholder="Enter Sender Phone Number" validate={required}/>
                    <Form.Label column lg={2}>Receiver Phone Number</Form.Label>
                    <Field component={Input} name="receiverPhoneNumber" placeholder="Enter Receiver Phone Number" validate={required}/>
                </Form.Row>
                <Field name="image" component={FileBase64} validate={required}/>
                <Button title="Create" type="submit"/>
            </Form>
        </Card.Body>
    </Card>
);

export default formWrapper({form: FormNames.NewPackage})(NewPackageForm);