import {changeCurrentFilter} from "../redux/actions";
import {connect} from "react-redux";
import {FilterButton} from "../component/FilterButton/FilterButton";

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.currentTodosFilter,
		text: ownProps.children
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		callback: () => {
			dispatch(changeCurrentFilter(ownProps.filter))
		}
	}
};

export const FilterButtonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterButton);