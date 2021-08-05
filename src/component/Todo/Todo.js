import React, {useState} from "react";
import {ToDoCardButtonContainer} from "../../containers/TodoCardButtonContainer";
import {REMOVE_TODO, MAKE_TODO_IMPORTANT, TOGGLE_TODO_STATUS} from "../../redux/actions";
import styled from "styled-components";

const ToDoCard = styled.div`
  position: relative;
  border: 1px solid black;
  background: ${({completed}) => completed ? "rgba(255, 255, 255, 0.5)" : "white"};
  padding: 20px;
	border-radius: 10px;
	margin-bottom: 10px;
	cursor: pointer;
	min-height: 100px;
	input {
		text-decoration: ${({completed}) => completed ? "line-through" : "none"};
		color: ${({important}) => important ? "gold" : "black"};
	}
`;


const ToDoButtons = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  button:not(:last-of-type) {
    margin-right: 10px;
  }
`;

const ToDoInput = styled.input`
	font-size: 25px;
	font-weight: 700;
	padding: 10px 20px;
	font-family: inherit;
	background: transparent;
	border: none;
	cursor: pointer;
	width: 100%;
	:focus {
		outline: none;
	}
`;

const ToDoInputsWrapper = styled.div`
	position: absolute;
	left: 20px;
	top: 50px;
	transform: translateY(-50%);
	width: 100%;
`;



export const Todo = ({text, completed, important, id, changeText, onEmptyInput}) => {
	const [localText, setLocalText] = useState(text);
	let fetchTimer = null;

	function workWithInput() {
		clearInterval(fetchTimer);
		fetchTimer = setTimeout(() => changeText(id, localText), 1000);
	}

	return (
		<ToDoCard completed={completed} important={important}>
			<ToDoInputsWrapper>
				<ToDoInput spellCheck="false" type="text" value={localText} onInput={e => {
					setLocalText(e.target.value);
					if (!e.target.value) onEmptyInput(id);
					workWithInput();
				}}/>
			</ToDoInputsWrapper>
			<ToDoButtons>
				<ToDoCardButtonContainer className={"btn btn-info"} action={TOGGLE_TODO_STATUS} id={id}>Toggle Status</ToDoCardButtonContainer>
				<ToDoCardButtonContainer className={"btn btn-danger"} action={REMOVE_TODO} id={id}>Delete</ToDoCardButtonContainer>
				<ToDoCardButtonContainer className={"btn btn-warning"} action={MAKE_TODO_IMPORTANT} id={id}>Make important</ToDoCardButtonContainer>
			</ToDoButtons>
		</ToDoCard>
	)
}