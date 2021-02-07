import React from 'react';
import {Col} from "react-bootstrap";
import renderIf from 'render-if';
import './DatePicker.scss';

const DatePicker = ({label, invalid, error, type, value, onChange, onBlur,  ...other}) => {
  return (
    <Col className="date-picker">
      <input type={type}
             value={value}
             onChange={(e) => onChange(e.target.value)}
             onBlur={(e) => onChange(e.target.value)}
             {...other} className={invalid ? "invalid" : ""}/>
      {renderIf((error && value) || invalid)(() => (
        <div className="error-feedback">{error}</div>
      ))}
    </Col>
  );
};

DatePicker.defaultProps = {
  type: "date"
};

export default DatePicker;