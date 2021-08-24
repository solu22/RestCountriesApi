import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import useCountry from '../custom-hook/useCountry';
import { Country } from '../types';



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const TablePage= ()=> {
    const classes = useStyles();
    const [countries] = useCountry()
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell align="right">FLAG</TableCell>
              <TableCell align="right">POPULATION</TableCell>
              <TableCell align="right">REGION</TableCell>
              <TableCell align="right">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries && countries.map((country: Country[] | Country | any) => (
              <TableRow key={country.name}>
                <TableCell component="th" scope="row">{country.name}</TableCell>
                <TableCell align="right">{country.flag}</TableCell>
                <TableCell align="right">{country.population}</TableCell>
                <TableCell align="right">{country.region}</TableCell>
                <TableCell align="right"><Button>Add</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  export default TablePage