import React from "react";
import {useDispatch} from "react-redux";
import CountryAutocomplete from "./autocomplete";
import {getUniversities} from "../../../service/universityService";
import BasicTable from "./table";
import BasicPagination from "./pagination";

const UniversityHome = (props) => {
        const dispatch = useDispatch();
        const universityList = props.universities;
        const currentPage = props.pageNumber;

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
                                props.onClearCountry();
                            }
                        }
                        }/>
                </div>

                {!!universityList.length &&
                <div><BasicTable universities={universityList.slice((currentPage-1)*10, currentPage*10)}/>
                    <BasicPagination pages={Math.ceil(universityList.length/10)} getSelectedPageNumber={(event, pageNumber) => {
                        props.onPageChange(pageNumber);
                    }
                    }/>
                </div>
                }
            </div>);
    }
;


export default UniversityHome;
