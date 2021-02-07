import {appServerUrl, createAppRequestAction} from "../../utils/reduxUtils";
import types from './types';
import _ from 'lodash';
import alertActions from '../../common/alert/duck/actions';
import {getFormValues, initialize} from 'redux-form';
import {FormNames, ModalNames} from "../../constants";
import fileDownload from "js-file-download";
import fetchActions from "../../fetch/duck/fetchActions";
import * as Cookies from "js-cookie";
import modalOperations from '../../common/modal/duck/operations';

const downloadFile = (id) => dispatch => {
    const param = {
        method: 'GET',
        headers: {
            Authorization: Cookies.getJSON("AuthToken")
        }
    };

    dispatch(fetchActions.setFetchRequestPending(types.DOWNLOAD_FILE.BASE));

    return fetch(appServerUrl + 'package/attachment/' + id, param)
        .then(res => {
            if (res.status === 400) {
                const error = "Access Denied";
                dispatch(fetchActions.setFetchRequestRejected(types.DOWNLOAD_FILE.BASE, error));
                dispatch({type: types.DOWNLOAD_FILE.REJECTED, payload: error});
                dispatch(alertActions.showAlert(error));
                return Promise.reject(error);
            }
            return res.blob();
        })
        .then(res => {
            dispatch(fetchActions.setFetchRequestFulfilled(types.DOWNLOAD_FILE.BASE));
            fileDownload(res, "attachment" + id + ".pdf")
        })
        .catch(err => {
            dispatch(fetchActions.setFetchRequestRejected(types.DOWNLOAD_FILE.BASE, err));
        })
};

const downloadFileFromDialog = (row) => (dispatch, getState) => {
    const key = _.get(getFormValues(FormNames.Key)(getState()), "key");
    return dispatch(downloadFile(row.fileName, row.id, key))
        .then(() => dispatch(modalOperations.hideModal(ModalNames.Key)))
};

const createNewPackage = (formValues) => dispatch => dispatch(createAppRequestAction({
    types: types.CREATE_NEW_PACKAGE,
    url: "package",
    method: "POST",
    body: {...formValues, image: formValues.image.base64},
    successHandler: () => dispatch(initialize(FormNames.NewPackage, undefined))
}));

const fetchUserData = () => dispatch => dispatch(createAppRequestAction({
    types: types.FETCH_USER_DATA,
    url: "user",
    method: "GET",
    successHandler: (data) => {
        const formData = {senderName: data.name, senderSurname: data.surname, senderAddress: data.streetAddress + " " + data.buildingNumber + ", " + data.postalCode};
        dispatch(initialize(FormNames.NewPackage, formData));
        return data;
    }
}));

const fetchPackages = () => dispatch => dispatch(createAppRequestAction({
    types: types.FETCH_PACKAGES,
    url: "package",
    method: "GET"
}));

export default {
    downloadFile,
    downloadFileFromDialog,
    createNewPackage,
    fetchUserData,
    fetchPackages
}