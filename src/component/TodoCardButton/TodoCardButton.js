import React from "react";

export const TodoCardButton = ({text, callback}) => {
	
	return <button onClick={() => callback()}>{text}</button>
};