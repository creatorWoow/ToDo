import {CHANGE_TODOS_FILTER, FILTER_TYPES} from "../actions";

export const currentTodosFilter = (state = FILTER_TYPES.SHOW_ALL, action) => {
	switch (action.type) {
		case CHANGE_TODOS_FILTER:
			return action.filter;
			
		default:
			return state;
	}
};