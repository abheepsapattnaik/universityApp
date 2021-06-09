import axios from 'axios';

export const getUniversities = () => {
    return axios
        .get("http://universities.hipolabs.com/search?country=india ")
        .then(response => console.log(response.data))
        .catch(() => console.log('Error'));

}