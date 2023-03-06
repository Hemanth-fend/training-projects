import { TodoReducer } from "../reducers/TodoReducer";
import { combineReducers } from "redux";

export const CommonReducers = combineReducers({
    ToDo : TodoReducer
})