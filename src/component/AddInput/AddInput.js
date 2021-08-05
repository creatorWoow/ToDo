import React, {useState} from "react";

export const AddInput = ({callback}) => {
	const [text, setText] = useState("");
	
	return (
		<div>
			<input className={"form-control-sm mr-2"}
				type="text"
				value={text}
				onInput={e => setText(e.target.value)}/>
			<button className={"btn btn-secondary"}
				onClick={() => {
					if (text.trim()) callback(text.trim());
					setText("");
				}}>Add</button>
		</div>
	)
};