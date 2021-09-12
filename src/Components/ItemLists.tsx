import React from "react";
import { useSelector } from "react-redux";
import { removeItemsfromCart } from "../Redux/actions";
import { AppState } from "../Redux/Reducers";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 90,
      textAlign: "center",
      width: "100%",
    },

    sideBar: {
      width: "300px",
      textAlign: "center",
    },
  })
);

interface ItemProps {
  name: string;
  flag: string;
}

const ItemLists = () => {
  const classes = useStyles();
  const itemState = useSelector((state: AppState) => state.cartReducer.cart);
  const dispatch = useDispatch();

  return (
    <Grid container className={classes.sideBar} justifyContent="center">
      <Typography
        variant="h4"
        component="h4"
        style={{ textAlign: "center", display: "inline-block" }}
      >
        {itemState.length === 0 && <p> No Items in Cart </p>}
      </Typography>
      {itemState.map((item: ItemProps) => (
        <Card className={classes.root} key={item.name}>
          <CardContent>
            <img src={item.flag} style={{ width: "70px" }} alt="flags" />

            <Typography variant="h5" color="textSecondary">
              {item.name}
            </Typography>
            <br></br>
            <Button
              variant="contained"
              onClick={() => dispatch(removeItemsfromCart(item))}
              color="secondary"
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default ItemLists;
