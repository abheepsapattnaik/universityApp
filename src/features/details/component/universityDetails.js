import React from 'react';
import {Paper, Typography} from "@material-ui/core";

const UniversityDetails = (props) => {
    const id = props.match.params.id;
    const details = props.universities.find(eachUniversity => eachUniversity.id === id);
    return (
        <div style={{display: 'flex', justifyContent: 'center',}}>
            <Paper style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '95vw',
                alignItems: 'center',
                paddingTop: 40
            }}>
                < Typography variant={'h4'}> {details?.name}</Typography>
                <Typography> {details?.state}</Typography>
                <a href={details?.web_page} style={{cursor: "pointer"}}
                   target="_blank" rel="noreferrer"
                >{details?.name}</a>
                <Typography> {details?.country}</Typography>
            </Paper>
        </div>


    );
}

export default UniversityDetails;