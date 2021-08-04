import React, {useState} from "react";

export const AddInput = ({callback}) => {
	const [text, setText] = useState("");
	
	return (
		<div>
			<input
				type="text"
				value={text}
				onInput={e => setText(e.target.value)}/>
			<button
				onClick={() => {
					callback(text);
					setText("");
				}}>Add</button>
		</div>
	)
};