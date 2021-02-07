import types from './types';

const changeLoggedInFlag = (val) => ({
    type: types.CHANGE_LOGGED_IN_FLAG,
    payload: val
});

export default {
    changeLoggedInFlag
}