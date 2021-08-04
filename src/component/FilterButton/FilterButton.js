import React from "react";

export const FilterButton = ({text, callback, active}) => {
	return <button
		disabled={active}
		onClick={() => callback()}>{text}</button>
};