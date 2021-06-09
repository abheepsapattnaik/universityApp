import {connect} from "react-redux";
import UniversityHome from "./universityHome";
import {clearUniversityName} from "../redux/universityReducer";

const mapPropsToState = (state) => {
    return {
        universities: state.universityStore.universities,
        loading: state.universityStore.loading
    };
};
const mapDispatchToProps = (dispatch) => ({
    onClearCountry: () => dispatch(clearUniversityName()),
});

export default connect(mapPropsToState, mapDispatchToProps)(UniversityHome);