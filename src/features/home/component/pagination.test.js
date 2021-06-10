import {shallow} from "enzyme";
import React from "react";
import BasicPagination from "./pagination";
import {Pagination} from "@material-ui/lab";


describe('BasicPagination', () => {
    it('should create an autocomplete component', () => {
        const props = {
            getSelectedPageNumber: jest.fn(),
            pages: 2,
        };
        const basicPaginationTag = shallow(<BasicPagination {...props}/>);
        const muiPaginationTag = basicPaginationTag.find(Pagination);
        expect(muiPaginationTag.length).toBe(1);
        expect(muiPaginationTag.prop('count')).toBe(props.pages);
        expect(muiPaginationTag.prop('onChange')).toBe(props.getSelectedPageNumber);
    });
});