import React from "react";
import {ToDoCardButtonContainer} from "../../containers/TodoCardButtonContainer";
import {REMOVE_TODO, MAKE_TODO_IMPORTANT} from "../../redux/actions";

export const Todo = ({text, completed, important, id, callback}) => {
	return (
		<div>
			<div onClick={() => callback()}>
				<div>
					<input type="text" value={text}/>
				</div>
			</div>
			<div>
				<ToDoCardButtonContainer action={REMOVE_TODO} id={id}>Delete</ToDoCardButtonContainer>
				<ToDoCardButtonContainer action={MAKE_TODO_IMPORTANT} id={id}>Make important</ToDoCardButtonContainer>
			</div>
		</div>
	)
}