import axios from 'axios';
import {loadUniversitiesError, loadUniversitiesSuccess} from "../features/home/redux/universityReducer";

const transformData = (universityDetails) => {
    const {country, name, web_pages} = universityDetails;
    return {
        country, name,
        state: universityDetails['state-province'] || 'Not Available',
        web_page: web_pages[0]
    };

}
export const getUniversities = (country, dispatch) => {

    return axios
        .get(`http://universities.hipolabs.com/search?country=${country}`)
        .then(response => dispatch(
            loadUniversitiesSuccess(response.data.map(eachUniversity => transformData(eachUniversity))))
        )
        .catch(() => dispatch(loadUniversitiesError()));

}