import {combineReducers} from "redux";
import {todos} from "./reducers/ todos";
import {currentTodosFilter} from "./reducers/currentTodosFilter";

export const rootReducer = combineReducers({
	todos,
	currentTodosFilter
});