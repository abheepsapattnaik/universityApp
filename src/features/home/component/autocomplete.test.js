import {shallow} from "enzyme";
import React from "react";
import CountryAutocomplete from "./autocomplete";
import {Autocomplete} from "@material-ui/lab";

describe('Autocomplete', () => {
    it('should create an autocomplete component', () => {
        const props = {
            getSelectedCountry: jest.fn()
        };
        const autocompleteTag = shallow(<CountryAutocomplete {...props}/>);
        const muiAutocompleteTag = autocompleteTag.find(Autocomplete);
        expect(muiAutocompleteTag.length).toBe(1);
    });
});