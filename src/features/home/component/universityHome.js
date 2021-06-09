import React from "react";
import {useDispatch} from "react-redux";
import CountryAutocomplete from "./autocomplete";
import {getUniversities} from "../../../service/universityService";
import BasicTable from "./table";

const UniversityHome = (props) => {
    const dispatch = useDispatch();
    const universityList = props.universities;

    return (
        <div style={{
            display: 'block',
            height: '100vh',
            justifyContent: 'space-around',
            margin: 40
        }}>
            <div style={{margin: '100 auto', paddingBottom: 10}}>
                <CountryAutocomplete
                    getSelectedCountry={(event, country) => {
                        if (!!country) {
                            getUniversities(country.title, dispatch).then(r => {
                            })
                        } else {
                            props.onClearCountry()
                        }
                    }
                    }/>
            </div>

            {!!universityList.length &&
            <BasicTable universities={universityList}/>
            }
        </div>);
};


export default UniversityHome;
