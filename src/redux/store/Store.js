import {createStore, compose, applyMiddleware} from 'redux';
import { CommonReducers } from '../common-reducers/CommonReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

export const store = createStore(CommonReducers, composedEnhancers );

