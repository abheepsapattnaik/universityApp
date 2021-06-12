import {shallow} from 'enzyme';
import React from 'react';
import LinkToDetails from './linkToDetails';
import {Typography} from '@material-ui/core';

describe('LinkToDetails', () => {
    it('should render the Link', () => {
        const props = {
            universities: [
                {
                    id: 'some',
                    name: 'Some college',
                    web_page: 'www.some.com',
                    state: 'state'
                }
            ]
        }
        const linkToDetailsTag = shallow(<LinkToDetails universityDetails={props.universities[0]}/>);
        const typographyTags = linkToDetailsTag.find(Typography);
        expect(typographyTags.length).toBe(1);
        expect(typographyTags.text()).toBe('Some college');
    });
});