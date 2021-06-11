import React from 'react';
import CountryAutocomplete from './autocomplete';
import {getUniversities} from '../../../service/universityService';
import BasicTable from './table';
import BasicPagination from './pagination';
import {PAGE_LIMIT} from '../../../ common/utils/constants';
import {LinearProgress, Typography} from '@material-ui/core';

const UniversityHome = (props) => {
    const universityList = props.universities;
    const currentPage = props.pageNumber;

    const noResultsMessage = !universityList.length && !props.error && !!props.selectedCountry && !props.loading;
    const errorMessage = !universityList.length && !!props.error && !props.loading && props.selectedCountry?.length > 0;
    const typeToStartMessage = !props.selectedCountry && !props.loading;

    return (
        <div style={{
            display: 'block',
            justifyContent: 'space-around',
            padding: 40,
            height : '89vh'
        }}>
            <div style={{margin: '100 auto', paddingBottom: 50}}>
                <CountryAutocomplete
                    getSelectedCountry={(event, country) => {
                        props.onCountryChange(country?.title.toLowerCase() || '');
                        if (!!country) {
                            getUniversities(country.title, props).then(_ => {
                            })
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
            {props.loading && !universityList.length && <LinearProgress/>}
            {
                noResultsMessage && <Typography>No results Available. Please try some other country !</Typography>
            }
            {
                errorMessage && <Typography>Some error happened. Try again in some time</Typography>
            }
            {
                typeToStartMessage && <Typography>Type a Country name to get all universities</Typography>
            }
        </div>);
};


export default UniversityHome;
