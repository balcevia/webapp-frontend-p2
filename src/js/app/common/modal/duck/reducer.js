import types from './types';

const initialState = {};

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SHOW_MODAL:
      const {name, config} = action.payload;
      return ({...state, [name]: {show: true, config}});
    case types.HIDE_MODAL:
      return ({...state, [action.payload]: {show: false, config: {}}});
    default:
      return state;
  }
};

export default modalReducer;