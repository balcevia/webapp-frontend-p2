import reducers from './reducers';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import fetchActionMiddleware from "./app/fetchActionMiddleware";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const middlewares = [logger, thunk, fetchActionMiddleware, routerMiddleware(history)];

export default createStore(reducers(history), applyMiddleware(...middlewares));