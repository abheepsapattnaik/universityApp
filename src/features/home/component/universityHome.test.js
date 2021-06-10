import {shallow} from "enzyme";
import React from "react";
import UniversityHome from "./universityHome";
import CountryAutocomplete from "./autocomplete";
import BasicTable from "./table";
import BasicPagination from "./pagination";

describe('UniversityHome', () => {
    it('should create an autocomplete component', () => {
        const props = {
            universities: [{
                name: 'Uni name',
                web_page: 'www.example.com',
                state: 'State'
            }],
            currentPage: 1,
        };
        const universityHomeTag = shallow(<UniversityHome {...props}/>);
        const autocompleteTag = universityHomeTag.find(CountryAutocomplete);
        const tableTag = universityHomeTag.find(BasicTable);
        const paginationTag = universityHomeTag.find(BasicPagination);
        expect(autocompleteTag.length).toBe(1);
        expect(tableTag.length).toBe(1);
        expect(paginationTag.length).toBe(1);
    });
});