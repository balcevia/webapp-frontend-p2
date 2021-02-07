import {generateFetchActionNames} from "../../utils/reduxUtils";

const CREATE_NEW_PACKAGE = generateFetchActionNames("CREATE_NEW_PACKAGE");
const FETCH_USER_DATA = generateFetchActionNames("FETCH_USER_DATA");
const FETCH_PACKAGES = generateFetchActionNames("FETCH_PACKAGES");
const DOWNLOAD_FILE = generateFetchActionNames("DOWNLOAD_FILE");
const REMOVE_PACKAGES = generateFetchActionNames("REMOVE_PACKAGES");
const ADD_TO_COURIER = generateFetchActionNames("ADD_TO_COURIER");
const FETCH_COURIER_PACKAGES = generateFetchActionNames("FETCH_COURIER_PACKAGES");

export default {
    CREATE_NEW_PACKAGE,
    FETCH_USER_DATA,
    FETCH_PACKAGES,
    DOWNLOAD_FILE,
    ADD_TO_COURIER,
    REMOVE_PACKAGES,
    FETCH_COURIER_PACKAGES
}