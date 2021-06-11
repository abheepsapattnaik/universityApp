import {connect} from 'react-redux';
import UniversityDetails from "./universityDetails";

const mapPropsToState = (state) => {
    return {
        universities: state.universityStore.universities,
    };
};

export default connect(mapPropsToState)(UniversityDetails);