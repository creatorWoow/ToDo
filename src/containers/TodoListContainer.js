import {FILTER_TYPES, toggleTodoStatus} from "../redux/actions";
import {connect} from "react-redux";
import {TodoList} from "../component/TodoList/TodoList";

const {SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED, SHOW_IMPORTANT} = FILTER_TYPES;

const visibleTodos = (todos, filter) => {
	switch (filter) {
		
		case SHOW_COMPLETED:
			return todos.filter(todo => todo.completed);
			
		case SHOW_UNCOMPLETED:
			return todos.filter(todo => !todo.completed);
			
		case SHOW_IMPORTANT:
			return todos.filter(todo => todo.important);
		
		case SHOW_ALL:
		default:
			return todos;
	}
}

const mapStateToProps = (state) => {
	return {
		todos: visibleTodos(state.todos, state.currentTodosFilter)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleStatus: (id) => {
			dispatch(toggleTodoStatus(id));
		}
	}
}

export const TodoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)