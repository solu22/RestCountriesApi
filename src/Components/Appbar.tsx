import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, alpha, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Badge, Button, Drawer, Grid } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ItemLists from './ItemLists';
import { useSelector } from 'react-redux';
import { AppState } from '../Redux/Reducers';
import Themes from '../Theme/Theme';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
)




const Appbar = ({ search, onChange }: any) => {
  const classes = useStyles()
  const [cart, setCart] = useState(false)
  const itemState = useSelector((state: AppState) => state.cartReducer.cart)

  return (
    <div className={classes.root}>
      <Themes>

        <AppBar position="static">
          <Toolbar>
            <Grid container direction="row">
              <Grid >
               <Link to ="/" style= {{textDecoration : 'none', color:'black', fontFamily:'Rampart One, cursive', fontSize: '20px'}}>countries API</Link>
              </Grid>
            </Grid>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  value={search}
                  onChange={onChange}

                />
              </div>
              <Drawer anchor="right" open={cart} onClose={() => setCart(false)} >
                <ItemLists />
              </Drawer>

              <Button onClick={() => setCart(true)}>
                <Badge badgeContent={itemState.length} color='secondary' >
                  <AddShoppingCartIcon style={{ color: 'secondary', alignItems: 'center' }} />
                </Badge>
              </Button> 

          </Toolbar>
        </AppBar>
      </Themes>
    </div>
      )
}


      export default Appbar