import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Input} from "../../common/form/formFields";
import {required} from "../../validators/required";
import Button from '../../common/Button';
import {formWrapper} from "../../common/form/formWrapper";
import {FormNames} from "../../constants";
import { Field } from "redux-form";


const TakePackage = ({handleSubmit}) => {
    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Row className="package-form-row">
                        <Form.Label column lg={2}>PackageId</Form.Label>
                        <Field component={Input} name="id" placeholder="Enter Package Id" validate={required}/>
                    </Form.Row>
                    <Button type="submit" title="Submit"/>
                </Form>
            </Card.Body>
        </Card>
    )
};
export default formWrapper({form: FormNames.CourierPackage})(TakePackage);