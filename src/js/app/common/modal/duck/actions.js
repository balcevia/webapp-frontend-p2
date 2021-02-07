import types from './types';

const showModal = (name, config) => ({
  type: types.SHOW_MODAL,
  payload: {name, config}
});

const hideModal = (name) => ({
  type: types.HIDE_MODAL,
  payload: name
});

export default {
  showModal,
  hideModal
}