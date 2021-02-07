import * as Cookies from "js-cookie";
import fetchActions from "./fetch/duck/fetchActions";
import _ from "lodash";
import alertActions from "./common/alert/duck/actions";
import {push} from 'connected-react-router';

const fetchActionMiddleware = ({dispatch}) => next => action => {
    const isFetchAction = action.meta && action.meta.requestAction;

    if (!isFetchAction) {
        return next(action);
    }

    if (!action.meta.noAuth && _.isUndefined(Cookies.get("AuthToken"))) {
        dispatch(alertActions.showAlert("Your session has expired"));
        dispatch(push("/login"));
        return;
    }

    const types = action.types;

    dispatch(fetchActions.setFetchRequestPending(types.BASE));
    dispatch({type: types.PENDING});

    return action.payload
        .then(res => res.json())
        .then(data => {
            const error = data.error;
            if (error) {
                dispatch(fetchActions.setFetchRequestRejected(types.BASE, error));
                dispatch({type: types.REJECTED, payload: error});
                dispatch(alertActions.showAlert(error));
                return Promise.reject(error);
            }
            const newToken = data.token;
            if(newToken) {
                Cookies.set("AuthToken", newToken);
            }
            const effectiveData = action.meta.successHandler ? action.meta.successHandler(data.response || data) : data.response;

            dispatch(fetchActions.setFetchRequestFulfilled(types.BASE));
            dispatch({
                type: types.FULFILLED,
                payload: effectiveData
            });

            return Promise.resolve(effectiveData);
        })
        .catch(error => {
            const e = error.toString()
            console.error('async action execution failed', e);
            dispatch(fetchActions.setFetchRequestRejected(types.BASE, e));
            dispatch({
                type: types.REJECTED,
                payload: e
            });
            dispatch(alertActions.showAlert(e));
            return Promise.reject(e);
        })
};

export default fetchActionMiddleware;