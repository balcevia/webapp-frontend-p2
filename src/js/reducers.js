import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import alert from './app/common/alert/duck/reducer';
import user from "./app/login/duck/reducer";
import mainReducer from "./app/main/duck/reducer";
import modalReducer from "./app/common/modal/duck/reducer";

const rootReducer = (history) => combineReducers({
  alert,
  router: connectRouter(history),
  form: formReducer,
  fetch,
  user,
  main: mainReducer,
  modal: modalReducer
});
export default rootReducer;