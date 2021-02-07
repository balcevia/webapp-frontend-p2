import React from 'react';
import renderIf from "render-if";
import Form from 'react-bootstrap/Form';
import {Col} from "react-bootstrap";
import {Typeahead} from 'react-bootstrap-typeahead';
import _ from 'lodash';

const Multiselect = ({label, placeholder, helperText, invalid, error, value, options, onChange, valueKey, ...other}) => {

  const change = (values) => {
    const mappedValues = values.map(v => _.get(v, valueKey) || v);
    onChange(mappedValues);
  };

  return (
    <Col>
      <Typeahead
        {...other}
        onChange={change}
        options={options}
        onBlur={() => {}}
        placeholder={placeholder || label}
        multiple
        clearButton
      />
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
};

export default Multiselect;