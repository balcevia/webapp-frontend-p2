import {generateFetchActionNames} from "../../utils/reduxUtils";

const LOG_IN_USER = generateFetchActionNames("LOG_IN_USER");
const REGISTER_USER = generateFetchActionNames("REGISTER_USER");
const CHANGE_LOGGED_IN_FLAG = "CHANGE_LOGGED_IN_FLAG";

export default {
    LOG_IN_USER,
    REGISTER_USER,
    CHANGE_LOGGED_IN_FLAG
}