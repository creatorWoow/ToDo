import React from "react";
import {Todo} from "../Todo/Todo";

export const TodoList = ({todos, toggleStatus, changeText, onEmptyInput}) => {
	return(
		<div>
			<ul>
				{todos.map(todo => <Todo
					changeText={(id, text) => changeText(id, text)}
					{...todo}
					key={todo.id}
					callback={() => toggleStatus(todo.id)}
					onEmptyInput={(id) => onEmptyInput(id)}
				/>)}
			</ul>
		</div>
	)
};