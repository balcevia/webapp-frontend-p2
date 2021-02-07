import React from 'react';
import renderIf from "render-if";
import Form from 'react-bootstrap/Form';
import {Col} from "react-bootstrap";

const Select = ({label, placeholder, helperText, invalid, error, children, ...other}) => (
  <Col>
    <Form.Control {...other} placeholder={placeholder} isInvalid={invalid} as="select">
      {children}
    </Form.Control>
    <Form.Control.Feedback type="invalid">
      {error}
    </Form.Control.Feedback>
    {renderIf(helperText)(() => (
      <Form.Text muted>
        {helperText}
      </Form.Text>
    ))}
  </Col>
);

export default Select;