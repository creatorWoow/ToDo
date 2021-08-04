import React from "react";
import {FilterButtonContainer} from "../../containers/FilterButtonContainer";
import {FILTER_TYPES} from "../../redux/actions";

const {SHOW_ALL, SHOW_UNCOMPLETED, SHOW_COMPLETED, SHOW_IMPORTANT} = FILTER_TYPES;

export const Footer = () => {
	return(
		<div>
			<FilterButtonContainer filter={SHOW_ALL}>Show All</FilterButtonContainer>
			<FilterButtonContainer filter={SHOW_COMPLETED}>Show Completed</FilterButtonContainer>
			<FilterButtonContainer filter={SHOW_UNCOMPLETED}>Show Uncompleted</FilterButtonContainer>
			<FilterButtonContainer filter={SHOW_IMPORTANT}>Show Important</FilterButtonContainer>
		</div>
	)
};