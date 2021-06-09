import {useDispatch} from "react-redux";
import CountryAutocomplete from "./autocomplete";
import {getUniversities} from "../../../service/universityService";

const UniversityHome = (props) => {
    const dispatch = useDispatch();

    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            justifyContent: 'space-around',
            margin: 40
        }}>
            <CountryAutocomplete style={{margin: '100 auto'}}
                                 getSelectedCountry={(event, country) => {
                                     if (!!country) {
                                         getUniversities(country.title, dispatch).then(r => {
                                         })
                                     }
                                 }}/>
        </div>);
};


export default UniversityHome;
