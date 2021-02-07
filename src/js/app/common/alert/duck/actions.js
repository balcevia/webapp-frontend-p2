import types from "./types";

const showAlert = (text, variant) => ({
  type: types.SHOW_ALERT,
  payload: {text, variant}
});

const hideAlert = () => ({
  type: types.HIDE_ALERT
});

export default {
  hideAlert,
  showAlert
}