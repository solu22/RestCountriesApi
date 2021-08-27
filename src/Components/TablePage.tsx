/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { addItemsToCart } from '../Redux/actions';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme)=>({
    table: {
        minWidth: 700,
    },
}));


const TablePage = ({countries}: any) => {
    const classes = useStyles();
    const dispatch = useDispatch()


    return (
        
         <TableContainer component= {Paper}>
            <Table className={classes.table} aria-label="simple table" style={{tableLayout:'fixed', whiteSpace:'nowrap'}}>
                <TableHead>
                    <TableRow>
                        <TableCell align= "center">FLAG</TableCell>
                        <TableCell align="center">NAME</TableCell>
                        <TableCell align="center">POPULATION</TableCell>
                        <TableCell align="center">REGION</TableCell>
                        <TableCell align="center">ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {countries.map((country: any) => (
                        <TableRow key={country.name}>

                            <TableCell align="center">
                                <img src={country.flag} alt="country flag" style={{ width: "150px" }} />
                            </TableCell>
                            <TableCell align="center">
                                <Link to = {`/${country.name}`} style= {{textDecoration: 'none', color:'black'}}>{country.name}</Link>
                          </TableCell>
                            <TableCell align="center">{country.population}</TableCell>
                            <TableCell align="center">{country.region}</TableCell>
                            <TableCell align="center"><Button variant="contained" color="primary" onClick = {()=> dispatch(addItemsToCart(country))}>Add</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
       
        
    );
}

export default TablePage