import {connect} from "react-redux";
import UniversityHome from "./universityHome";
import {clearUniversityName, updatePageNumber} from "../redux/universityReducer";

const mapPropsToState = (state) => {
    return {
        universities: state.universityStore.universities,
        loading: state.universityStore.loading,
        pageNumber: state.universityStore.pageNumber,
    };
};
const mapDispatchToProps = (dispatch) => ({
    onClearCountry: () => dispatch(clearUniversityName()),
    onPageChange:(pageNumber)=>dispatch(updatePageNumber(pageNumber)),
});

export default connect(mapPropsToState, mapDispatchToProps)(UniversityHome);