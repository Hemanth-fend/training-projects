import {createStore, compose} from 'redux';
import { CommonReducers } from '../common-reducers/CommonReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(CommonReducers,composeEnhancers());

