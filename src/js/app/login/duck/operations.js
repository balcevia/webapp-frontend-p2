import {createAppRequestAction} from "../../utils/reduxUtils";
import * as Cookies from "js-cookie";
import types from './types';
import {push} from 'connected-react-router';
import actions from './actions';
import alertActions from '../../common/alert/duck/actions';
import {AlertType} from "../../common/alert/Alert";
import {UserRole} from "../../constants";

const login = (formValue) => (dispatch) => dispatch(
    createAppRequestAction({
        types: types.LOG_IN_USER,
        url: "auth",
        method: 'POST',
        body: formValue,
        noAuth: true,
        successHandler: data => {
            const {userId, email, token, role} = data;
            Cookies.set("AuthToken", token);
            Cookies.set("Role", role);
            dispatch(actions.changeLoggedInFlag(true));
            if(role === UserRole.Sender) {
                dispatch(push("/main/packages"));
            } else if(role === UserRole.Courier) {
                dispatch(push("/main/add-courier-package"));
            }
            return {userId, email, role};
        }
    })
);

const createUser = (formValues) => (dispatch) => dispatch(
    createAppRequestAction({
        types: types.REGISTER_USER,
        url: "user",
        method: 'POST',
        body: formValues,
        noAuth: true,
        successHandler: () => {
            dispatch(alertActions.showAlert("Successfully signed up", AlertType.Success));
            dispatch(push("/login"));
        }
    })
);

const logout = () => dispatch => {
    Cookies.remove("AuthToken");
    Cookies.remove("Role");
    dispatch(actions.changeLoggedInFlag(false));
    return dispatch(push("/login"));
};

export default {
    login,
    logout,
    createUser
}