import {shallow} from "enzyme";
import React from "react";
import UniversityHome from "./universityHome";
import CountryAutocomplete from "./autocomplete";
import BasicTable from "./table";
import BasicPagination from "./pagination";
import {LinearProgress} from "@material-ui/core";

describe('UniversityHome', () => {
    it('should create an autocomplete component', () => {
        const props = {
            universities: [{
                name: 'Uni name',
                web_page: 'www.example.com',
                state: 'State'
            }],
            currentPage: 1,
            loading: false
        };
        const universityHomeTag = shallow(<UniversityHome {...props}/>);
        const autocompleteTag = universityHomeTag.find(CountryAutocomplete);
        const tableTag = universityHomeTag.find(BasicTable);
        const paginationTag = universityHomeTag.find(BasicPagination);
        const linearProgressTag = universityHomeTag.find(LinearProgress);
        expect(autocompleteTag.length).toBe(1);
        expect(tableTag.length).toBe(1);
        expect(paginationTag.length).toBe(1);
        expect(linearProgressTag.length).toBe(0);
    });
    it('should have linear progress not the table', () => {
        const props = {
            universities: [],
            currentPage: 1,
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
});