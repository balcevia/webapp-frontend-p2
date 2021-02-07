import types from './types';
import * as Cookie from 'js-cookie';

const initialState = {
    loggedIn: !!Cookie.get("AuthToken")
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN_USER.FULFILLED:
            return {
                ...state,
                ...action.payload
            };
        case types.CHANGE_LOGGED_IN_FLAG:
            return {
                ...state,
                loggedIn: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;