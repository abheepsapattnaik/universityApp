import {shallow} from 'enzyme';
import React from 'react';
import UniversityHome from './universityHome';
import CountryAutocomplete from './autocomplete';
import BasicTable from './table';
import BasicPagination from './pagination';
import {LinearProgress, Typography} from '@material-ui/core';

describe('UniversityHome', () => {
    it('should create an autocomplete component', () => {
        const props = {
            universities: [{
                name: 'Uni name',
                web_page: 'www.example.com',
                state: 'State',
            }],
            pageNumber: 1,
            loading: false,
            searchInput: ''
        };
        const universityHomeTag = shallow(<UniversityHome {...props}/>);
        const autocompleteTag = universityHomeTag.find(CountryAutocomplete);
        const tableTag = universityHomeTag.find(BasicTable);
        const paginationTag = universityHomeTag.find(BasicPagination);
        const linearProgressTag = universityHomeTag.find(LinearProgress);

        expect(autocompleteTag.length).toBe(1);

        expect(tableTag.length).toBe(1);
        expect(tableTag.prop('universities')).toStrictEqual(props.universities);

        expect(paginationTag.length).toBe(1);
        expect(paginationTag.prop('currentPage')).toBe(1);
        expect(paginationTag.prop('pages')).toBe(1);

        expect(linearProgressTag.length).toBe(0);
    });
    it('should have linear progress not the table', () => {
        const props = {
            universities: [],
            pageNumber: 1,
            loading: true
        };
        const universityHomeTag = shallow(<UniversityHome {...props}/>);
        const autocompleteTag = universityHomeTag.find(CountryAutocomplete);
        const tableTag = universityHomeTag.find(BasicTable);
        const paginationTag = universityHomeTag.find(BasicPagination);
        const linearProgressTag = universityHomeTag.find(LinearProgress);
        expect(autocompleteTag.length).toBe(1);
        expect(tableTag.length).toBe(0);
        expect(paginationTag.length).toBe(0);
        expect(linearProgressTag.length).toBe(1);
    });

    it('should show type something to start searching', () => {
        const props = {
            universities: [{
                name: 'Uni name',
                web_page: 'www.example.com',
                state: 'State',
            }],
            pageNumber: 1,
            loading: false,
            error: false,
            selectedCountry: undefined,
            searchInput: '',

        };
        const universityHomeTag = shallow(<UniversityHome {...props}/>);
        const typographyTag = universityHomeTag.find(Typography);
        expect(typographyTag.length).toBe(1);
        expect(typographyTag.text()).toBe('Type a Country name to get all universities');

    });
    it('should show type something to start searching if searched is empty with existing error', () => {
        const props = {
            universities: [{
                name: 'Uni name',
                web_page: 'www.example.com',
                state: 'State',
            }],
            pageNumber: 1,
            loading: false,
            error: true,
            selectedCountry: undefined,
            searchInput: '',

        };
        const universityHomeTag = shallow(<UniversityHome {...props}/>);
        const typographyTag = universityHomeTag.find(Typography);
        expect(typographyTag.length).toBe(1);
        expect(typographyTag.text()).toBe('Type a Country name to get all universities');

    });
    it('should show error', () => {
        const props = {
            universities: [],
            pageNumber: 1,
            loading: false,
            error: true,
            selectedCountry: 'india',
            searchInput: '',

        };
        const universityHomeTag = shallow(<UniversityHome {...props}/>);
        const typographyTag = universityHomeTag.find(Typography);
        expect(typographyTag.length).toBe(1);
        expect(typographyTag.text()).toBe('Some error happened. Try again in some time');

    });
    it('should show no results', () => {
        const props = {
            universities: [],
            pageNumber: 1,
            loading: false,
            error: false,
            selectedCountry: 'india',
            searchInput: '',

        };
        const universityHomeTag = shallow(<UniversityHome {...props}/>);
        const typographyTag = universityHomeTag.find(Typography);
        expect(typographyTag.length).toBe(1);
        expect(typographyTag.text()).toBe('No results Available. Please try some other country !');

    });
});