import axios from 'axios';

const transformData = (universityDetails) => {
    const {country, name, web_pages} = universityDetails;
    return {
        country, name,
        state: universityDetails['state-province'] || 'Not Available',
        web_page: web_pages[0]
    };

}
export const getUniversities = (country, props) => {

    return axios
        .get(`http://universities.hipolabs.com/search?country=${country}`)
        .then(response => props.loadSuccess(
            response.data.map(eachUniversity => transformData(eachUniversity)))
        )
        .catch(() => props.loadError());

}