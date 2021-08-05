import React from "react";

export const TodoCardButton = ({text, callback, className}) => {
	
	return <button className={className} onClick={() => callback()}>{text}</button>
};