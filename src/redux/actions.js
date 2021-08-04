export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";
export const CHANGE_TODOS_FILTER = "CHANGE_TODOS_FILTER";
export const CHANGE_TODO_TEXT = "CHANGE_TODO_TEXT";
export const MAKE_TODO_IMPORTANT = "MAKE_TODO_IMPORTANT";

export const FILTER_TYPES = {
	SHOW_ALL: "SHOW_ALL",
	SHOW_COMPLETED: "SHOW_COMPLETED",
	SHOW_UNCOMPLETED: "SHOW_UNCOMPLETED",
	SHOW_IMPORTANT: "SHOW_IMPORTANT"
};

export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		data: {
			completed: false,
			important: false,
			text
		}
	}
};

export const removeTodo = (id) => {
	return {
		type: REMOVE_TODO,
		id
	}
};

export const toggleTodoStatus = (id) => {
	return {
		type: TOGGLE_TODO_STATUS,
		id
	}
};

export const changeCurrentFilter = (filter) => {
	return {
		type: CHANGE_TODOS_FILTER,
		filter
	}
};

export const changeTodoText = (id, text) => {
	return {
		type: CHANGE_TODO_TEXT,
		id,
		text
	}
};

export const makeTodoImportant = (id) => {
	return {
		type: MAKE_TODO_IMPORTANT,
		id
	}
};