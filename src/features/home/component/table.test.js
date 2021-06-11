import {shallow} from 'enzyme';
import React from 'react';
import BasicTable from './table';
import {TableContainer} from '@material-ui/core';
import LinkToDetails from "../LinkToDetails";

describe('BasicTable', () => {
    it('should create an autocomplete component', () => {
        const props = {
            universities: [{
                name: 'Uni name',
                web_page: 'www.example.com',
                state: 'State'
            }]
        };
        const basicTableTag = shallow(<BasicTable {...props}/>);
        const muiTableTag = basicTableTag.find(TableContainer);
        const linkTag = basicTableTag.find(LinkToDetails);
        expect(muiTableTag.length).toBe(1);
        expect(linkTag.length).toBe(1);
    });
});