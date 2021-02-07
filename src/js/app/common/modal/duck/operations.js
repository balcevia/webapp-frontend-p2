import actions from './actions';

const showModal = (name, config) => dispatch => dispatch(actions.showModal(name, config));

const hideModal = (name) => dispatch => dispatch(actions.hideModal(name));

export default {
  showModal,
  hideModal
}