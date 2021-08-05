import React from "react";
import {FilterButtonContainer} from "../../containers/FilterButtonContainer";
import {FILTER_TYPES} from "../../redux/actions";
import styled from "styled-components";
import {AddInputContainer} from "../../containers/AddInputContainer";

const {SHOW_ALL, SHOW_UNCOMPLETED, SHOW_COMPLETED, SHOW_IMPORTANT} = FILTER_TYPES;

const StyledFooter = styled.div`
	position: fixed;
	left: 50%;
	bottom: 100px;
	transform: translate(-50%);
`;

export const Footer = () => {
	return(
		<StyledFooter>
			<div className={"mb-3"}>
				<AddInputContainer/>
			</div>
			<FilterButtonContainer filter={SHOW_ALL}>Show All</FilterButtonContainer>
			<FilterButtonContainer filter={SHOW_COMPLETED}>Show Completed</FilterButtonContainer>
			<FilterButtonContainer filter={SHOW_UNCOMPLETED}>Show Uncompleted</FilterButtonContainer>
			<FilterButtonContainer filter={SHOW_IMPORTANT}>Show Important</FilterButtonContainer>
		</StyledFooter>
	)
};