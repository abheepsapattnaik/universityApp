import {mount, shallow} from 'enzyme';
import React from 'react';
import UniversityDetails from "./universityDetails";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";

describe('UniversityDetails', () => {
    it('should create an autocomplete component', () => {
        const props = {
            universities: [
                {
                    name: 'Some Name',
                    web_page: 'www.some.com',
                    state: 'Some state',
                    country: 'Country',
                }
            ],
            match: {
                params: {
                    id: 'some'
                }
            }
        };
        const autocompleteTag = shallow(<UniversityDetails {...props}/>);
        const muiPaperTag = autocompleteTag.find(Paper);
        const muiTypographyTags = autocompleteTag.find(Typography);
        expect(muiPaperTag.length).toBe(1);
        expect(muiTypographyTags.length).toBe(3);
    });
});