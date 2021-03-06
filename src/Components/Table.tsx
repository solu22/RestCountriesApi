/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button} from "@material-ui/core";
import { Link } from "react-router-dom";
import { addItemsToCart } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

/**** */
import TablePagination from "@material-ui/core/TablePagination";
import { AppState } from "../Redux/Reducers";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 1000,
  },
}));

const columns = ["flag", "name", "population", "region","services"];

const TablePage = ({ countries }: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const itemState = useSelector((state: AppState) => state.cartReducer.cart);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell align="center" style={{ minWidth: 170 }} key= {index} >
                    {column.toUpperCase()}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {countries
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((country: any, index: React.Key | null | undefined) => (
                  <TableRow key={index}>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      <img
                        src={country.flags.svg}
                        alt="country flag"
                        style={{ width: "150px" }}
                      />
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      <Link
                        to={`/${country.name.common}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {country.name.common}
                      </Link>
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      {country.population}
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      {country.region}
                    </TableCell>

                    <TableCell align="center" style={{ minWidth: 170 }}>
                      {itemState.find(
                        (item: { name: any }) => item.name.common === country.name.common
                      ) ? (
                        <Button variant="contained" disabled>
                          Add
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => dispatch(addItemsToCart(country))}
                        >
                          Add
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={countries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};
export default TablePage;
