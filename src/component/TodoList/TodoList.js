import React from "react";
import {Todo} from "../Todo/Todo";

export const TodoList = ({todos, toggleStatus}) => {
	return(
		<div>
			<ul>
				{todos.map(todo => <Todo {...todo} key={todo.id} callback={() => toggleStatus(todo.id)}/>)}
			</ul>
		</div>
	)
};