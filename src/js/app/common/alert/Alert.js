import React from 'react';
import Alert from 'react-bootstrap/Alert';
import actions from './duck/actions';
import {connect} from 'react-redux';
import './Alert.scss';
import {Fade} from "react-bootstrap";

const AlertContainer = ({isShown, text, onClose, variant}) => {
    return (
        <Alert show={isShown} variant={variant} onClose={onClose} dismissible className="sb-alert" transition={Fade}>
            <span>{text}</span>
        </Alert>
    );
};

export const AlertType = {
    Danger: "danger",
    Success: 'success'
};

AlertContainer.defaultProps = {
    variant: AlertType.Danger
};

const mapStateToProps = (state) => ({
    isShown: state.alert.isShown,
    text: state.alert.text,
    variant: state.alert.variant
});

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(actions.hideAlert())
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);