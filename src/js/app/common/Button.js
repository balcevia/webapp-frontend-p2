import React from 'react';
import Button from 'react-bootstrap/Button'
import './Button.scss';

const ButtonControl = ({title, onClick, variant, disabled, ...rest}) => (
  <Button onClick={onClick} variant={variant} disabled={disabled} {...rest}>{title}</Button>
);

export const ButtonType = {
  Primary: "outline-primary",
  Secondary: "outline-secondary",
  Success: "outline-success",
  Warning: "outline-warning",
  Danger: "outline-danger",
  Info: "outline-info",
  Dark: "outline-dark",
  Link: "link"
};

ButtonControl.defaultProps = {
  variant: ButtonType.Primary
};

export default ButtonControl;