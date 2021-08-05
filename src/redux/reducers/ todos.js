import {ADD_TODO, CHANGE_TODO_TEXT, MAKE_TODO_IMPORTANT, REMOVE_TODO, TOGGLE_TODO_STATUS} from "../actions";

let todoId = 1;

const initalState = [{
	completed: false,
	id: 0,
	important: false,
	text: "Some Text"
}]

export const todos = (state = initalState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, {...action.data, id: todoId++}];
			
		case REMOVE_TODO:
			return state.filter(todo => action.id !== todo.id);
			
		case TOGGLE_TODO_STATUS:
			return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);
			
		case MAKE_TODO_IMPORTANT:
			return state.map(todo => todo.id === action.id ? {...todo, important: !todo.important} : todo);
			
		case CHANGE_TODO_TEXT:
			return state.map(todo => todo.id === action.id ? {...todo, text: action.text} : todo);
			
		default:
			return state;
	}
};