import { TodoReducer } from "../reducers/TodoReducer";
import { combineReducers } from "redux";
import { WeatherReducer } from "../reducers/WeatherReducer";

export const CommonReducers = combineReducers({
    ToDo : TodoReducer,
    WeatherApp : WeatherReducer
})