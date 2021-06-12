import {Link} from "react-router-dom";
import React from "react";
import Grid from "@material-ui/core/Grid/";
import Typography from "@material-ui/core/Typography/";

const LinkToDetails = (props) => {
    return <Grid container>
        <Grid item>
            <Link to={`/details/${props.universityDetails.id}`}>
                <Typography color='primary' variant='subtitle1'>
                    {props.universityDetails.name}
                </Typography>
            </Link>
        </Grid>
    </Grid>;
}

export default LinkToDetails;