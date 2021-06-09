import {connect} from "react-redux";
import UniversityHome from "./universityHome";

const mapPropsToState = (state) => {
    return {
        universities: state.universityStore.universities,
        loading: state.universityStore.loading
    };
};

export default connect(mapPropsToState)(UniversityHome);