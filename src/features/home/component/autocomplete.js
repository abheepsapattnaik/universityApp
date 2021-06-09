import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function CountryAutocomplete(props) {
    return (
        <Autocomplete
            id="country-option"
            options={topCountries}
            getOptionLabel={(object) => object.title}
            onChange={props.getSelectedCountry}
            style={{width: 300}}
            renderInput={(params) =>
                <TextField {...params} label="Select Country" variant="outlined"/>}
        />
    );
}

const topCountries = [
    {title: 'India'},
    {title: 'Sri Lanka'},
    {title: 'USA'},
    {title: 'UK'},
];
