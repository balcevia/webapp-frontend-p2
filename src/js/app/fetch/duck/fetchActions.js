import types from "./fetchTypes";

const setFetchRequestPending = (request) => ({
  type: types.SET_FETCH_REQUEST_PENDING,
  payload: request
});

const setFetchRequestFulfilled = (request) => ({
  type: types.SET_FETCH_REQUEST_FULFILLED,
  payload: request
});

const setFetchRequestRejected = (request, error) => ({
  type: types.SET_FETCH_REQUEST_REJECTED,
  payload: {request, error}
});

export default {
  setFetchRequestPending,
  setFetchRequestFulfilled,
  setFetchRequestRejected
}