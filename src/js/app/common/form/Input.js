import React from 'react';
import Form from 'react-bootstrap/Form';
import renderIf from 'render-if';
import {Col} from "react-bootstrap";

const Input = ({label, placeholder, helperText, invalid, error, ...other}) => (
  <Col>
    <Form.Control {...other} placeholder={placeholder} isInvalid={invalid}/>
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

Input.defaultProps = {
  type: "text"
};

export default Input;