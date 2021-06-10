import {connect} from "react-redux";
import UniversityHome from "./universityHome";
import {
    clearUniversityName,
    loadUniversitiesError,
    loadUniversitiesSuccess,
    updatePageNumber
} from "../redux/universityReducer";

const mapPropsToState = (state) => {
    return {
        universities: state.universityStore.universities,
        loading: state.universityStore.loading,
        pageNumber: state.universityStore.pageNumber,
        error: state.universityStore.error,
    };
};
const mapDispatchToProps = (dispatch) => ({
    onClearCountry: () => dispatch(clearUniversityName()),
    onPageChange: (pageNumber) => dispatch(updatePageNumber(pageNumber)),
    loadSuccess: (details) => dispatch(loadUniversitiesSuccess(details)),
    loadError: () => dispatch(loadUniversitiesError()),
});

export default connect(mapPropsToState, mapDispatchToProps)(UniversityHome);