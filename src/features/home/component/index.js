import {connect} from 'react-redux';
import UniversityHome from './universityHome';
import {
    loadUniversitiesError,
    loadUniversitiesSuccess,
    searchUniversity,
    updatePageNumber,
    updateSelectedCountry,
} from '../redux/universityReducer';

const mapPropsToState = (state) => {
    return {
        universities: state.universityStore.universities,
        loading: state.universityStore.loading,
        pageNumber: state.universityStore.pageNumber,
        error: state.universityStore.error,
        selectedCountry: state.universityStore.selectedCountry,
        searchInput: state.universityStore.searchInput,
    };
};
const mapDispatchToProps = (dispatch) => ({
    onPageChange: (pageNumber) => dispatch(updatePageNumber(pageNumber)),
    loadSuccess: (details) => dispatch(loadUniversitiesSuccess(details)),
    loadError: () => dispatch(loadUniversitiesError()),
    onCountryChange: (countryName) => dispatch(updateSelectedCountry(countryName)),
    searchUniversity: (input) => dispatch(searchUniversity(input)),
});

export default connect(mapPropsToState, mapDispatchToProps)(UniversityHome);