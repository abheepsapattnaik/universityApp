import React from "react";
import CountryAutocomplete from "./autocomplete";
import {getUniversities} from "../../../service/universityService";
import BasicTable from "./table";
import BasicPagination from "./pagination";
import {PAGE_LIMIT} from "../../../ common/utils/constants";
import {Typography} from "@material-ui/core";

const UniversityHome = (props) => {
    const universityList = props.universities;
    const currentPage = props.pageNumber;

    return (
        <div style={{
            display: 'block',
            height: '100vh',
            justifyContent: 'space-around',
            margin: 40
        }}>
            <div style={{margin: '100 auto', paddingBottom: 50}}>
                <CountryAutocomplete
                    getSelectedCountry={(event, country) => {
                        if (!!country) {
                            getUniversities(country.title, props).then(_ => {
                            })
                        } else {
                            props.onClearCountry();
                        }
                    }
                    }/>
            </div>
            {!!universityList.length &&
            <div>
                <BasicTable
                    universities={universityList.slice((currentPage - 1) * PAGE_LIMIT, currentPage * PAGE_LIMIT)}/>
                <BasicPagination pages={Math.ceil(universityList.length / PAGE_LIMIT)}
                                 getSelectedPageNumber={(event, pageNumber) => {
                                     props.onPageChange(pageNumber);
                                 }
                                 }/>
            </div>
            }
            {
                !universityList.length && !props.error &&
                <Typography>No results Available. Please try some other country !</Typography>
            }
            {
                !universityList.length && !!props.error &&
                <Typography>Some error happened. Try again in some time</Typography>
            }
        </div>);
};


export default UniversityHome;
