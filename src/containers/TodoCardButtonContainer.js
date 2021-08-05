import {
	MAKE_TODO_IMPORTANT,
	makeTodoImportant,
	REMOVE_TODO,
	removeTodo,
	TOGGLE_TODO_STATUS,
	toggleTodoStatus
} from "../redux/actions";
import {connect} from "react-redux";
import {TodoCardButton} from "../component/TodoCardButton/TodoCardButton";

const mapStateToProps = (state, ownProps) => {
	return {
		text: ownProps.children,
		className: ownProps.className
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		callback: () => {
			switch (ownProps.action) {
				case REMOVE_TODO:
					dispatch(removeTodo(ownProps.id));
					break;
				
				case MAKE_TODO_IMPORTANT:
					dispatch(makeTodoImportant(ownProps.id));
					break;

				case TOGGLE_TODO_STATUS:
					dispatch(toggleTodoStatus(ownProps.id))
					break;
				
				default:
					console.log("Nothing")
			}
		}
	}
};


export const ToDoCardButtonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoCardButton);