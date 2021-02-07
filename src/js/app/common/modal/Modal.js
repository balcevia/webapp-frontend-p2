import React from 'react';
import Button, {ButtonType} from "../Button";
import renderIf from 'render-if';
import {bindActionCreators} from "redux";
import modalOperationCreators from './duck/operations';
import {connect} from 'react-redux';
import _ from "lodash";
import {Modal} from "react-bootstrap";

export const ModalSize = {
  Small: "sm",
  Large: "lg",
  XL: "xl"
};

const ModalComponent = ({component: Component, show, title, size, name, modalOperations, config, onSave, disableSave, ...rest}) => {
  return (
    <Modal
      show={show}
      size={size}
      onHide={() => modalOperations.hideModal(name)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Component {...rest} {...config}/>
      </Modal.Body>
      <Modal.Footer>
        {renderIf(onSave)(() => (
          <Button onClick={() => onSave(config)} title="Submit" disabled={disableSave}/>
        ))}
        <Button onClick={() => modalOperations.hideModal(name)} variant={ButtonType.Danger} title="Close"/>
      </Modal.Footer>
    </Modal>
  )
};

ModalComponent.defaultProps = {
  size: ModalSize.Small
};

const mapStateToProps = (state, props) => ({
  show: _.get(state, `modal.${props.name}.show`),
  config: _.get(state, `modal.${props.name}.config`)
});

const mapDispatchToProps = (dispatch) => ({
  modalOperations: bindActionCreators(modalOperationCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);