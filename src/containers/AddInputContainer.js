import {addTodo} from "../redux/actions";
import {connect} from "react-redux";
import {AddInput} from "../component/AddInput/AddInput";

const mapDispatchToProps = (dispatch) => {
	return {
		callback: (text) => {
			dispatch(addTodo(text))
		}
	}
};

export const AddInputContainer = connect(
	null,
	mapDispatchToProps
)(AddInput);