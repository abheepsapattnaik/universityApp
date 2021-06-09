import axios from 'axios';
import {loadUniversitiesError, loadUniversitiesSuccess} from "../features/home/redux/universityReducer";

export const getUniversities = (country, dispatch) => {

    return axios
        .get(`http://universities.hipolabs.com/search?country=${country}`)
        .then(response => dispatch(
            loadUniversitiesSuccess(response.data))
        )
        .catch(() => dispatch(loadUniversitiesError()));

}