import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TOP_COUNTRIES} from '../../../ common/utils/constants';

export default function CountryAutocomplete(props) {
    return (
        <Autocomplete
            id="country-option"
            options={TOP_COUNTRIES}
            getOptionLabel={(object) => object.title}
            onChange={props.getSelectedCountry}
            style={{width: 300}}
            renderInput={(params) =>
                <TextField {...params} label="Select Country" variant="outlined"/>}
        />
    );
}

