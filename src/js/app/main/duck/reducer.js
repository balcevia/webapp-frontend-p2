import types from './types';

const initialState = {
    userDetails: undefined,
    packages: []
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_DATA.FULFILLED:
            return {
                ...state,
                userDetails: {...action.payload}
            };
        case types.FETCH_PACKAGES.FULFILLED:
            return {
                ...state,
                packages: action.payload
            };
        default:
            return state;
    }
};

export default mainReducer;