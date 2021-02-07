import * as Cookies from "js-cookie";

export const appServerUrl = "http://localhost:1070/";


const createRequestAction = (serverUrl) => ({types, url, method, body, successHandler, noAuth, parseToJson = true}) => {
  const headers = noAuth ? {} : {Authorization: Cookies.get("AuthToken")};

  const params = {
    headers,
    method,
    body: parseToJson ? JSON.stringify(body) : body
  };

  return {
    types,
    meta: {
      requestAction: true,
      noAuth,
      successHandler
    },
    payload: fetch(serverUrl ? serverUrl + url : url, params)
  }
};

export const createAppRequestAction = createRequestAction(appServerUrl);
export const createExternalResourceRequestAction = createRequestAction();

export const generateFetchActionNames = (type) => ({
  BASE: type,
  PENDING: `${type}_PENDING`,
  FULFILLED: `${type}_FULFILLED`,
  REJECTED: `${type}_REJECTED`
});