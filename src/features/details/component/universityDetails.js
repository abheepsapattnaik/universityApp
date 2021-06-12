import React from 'react';
import {Paper, Typography} from '@material-ui/core';
import {blue_color} from "../../../ common/style/styleConstants";

const useStyle = () => {
    return {
        display: 'flex',
        flexDirection: 'column',
        width: '95vw',
        height: '90vh',
        alignItems: 'center',
        marginTop: 40,
        background: blue_color
    }
};
const UniversityDetails = (props) => {
    const paperStyle = useStyle()
    const id = props.match.params.id;
    const details = props.universities.find(eachUniversity => eachUniversity.id === id);
    return (
        <div style={{display: 'flex', justifyContent: 'center',}}>
            <Paper style={paperStyle}>
                <Typography style={{paddingTop: 40}}
                            variant='h4'
                            color='primary'
                            align="center">
                    {details?.name}
                </Typography>
                <Typography variant='h6'> {details?.state}, {details?.country}</Typography>
                <Typography variant="caption">
                    University Official Link:{' '}
                    <a href={details?.web_page}
                       style={{cursor: "pointer"}}
                       target="_blank" rel="noreferrer">
                        {details?.web_page}
                    </a>
                </Typography>
            </Paper>
        </div>


    );
}

export default UniversityDetails;