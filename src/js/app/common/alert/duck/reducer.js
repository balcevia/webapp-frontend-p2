import types from './types';

const initialState = {
    isShown: false,
    text: "",
    variant: undefined
};

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_ALERT:
            return {
                ...state,
                isShown: true,
                ...action.payload
            };
        case types.HIDE_ALERT:
            return {
                ...state,
                isShown: false
            };
        default:
            return state;
    }
};

export default alertReducer;