import React from 'react';
import {Typography} from "@material-ui/core";

const UniversityDetails = (props) => {
    const id = props.match.params.id;
    const details = props.universities.find(eachUniversity => eachUniversity.id === id);
    return (
        <div>
            <Typography> {details.name}</Typography>
            <Typography> {details.state}</Typography>
            <a href={details.web_page} style={{cursor: "pointer"}}
               target="_blank" rel="noreferrer"
            >{details.name}</a>
            <Typography> {details.country}</Typography>
        </div>


    );
}

export default UniversityDetails;