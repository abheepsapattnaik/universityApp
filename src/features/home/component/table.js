import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const openInNewTab = (url) => {
    const newWindow = window.open(url)
    if (newWindow) newWindow.opener = null
}


export default function BasicTable(props) {
    const classes = useStyles();


    const {universities} = props;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>University Name</TableCell>
                        <TableCell align="right">State</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {universities.map((university) => (
                        <TableRow key={university.name}>
                            <TableCell component="th" scope="row">
                                <span style={{cursor: "pointer"}} onClick={() => {
                                    openInNewTab(university.web_pages[0])
                                }}>{university.name}</span>
                            </TableCell>
                            <TableCell align="right">{university['state-province']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
