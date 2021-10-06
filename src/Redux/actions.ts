import axios from "axios";

import { Dispatch } from "react";
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAIL,
  FETCH_COUNTRIES_SUCCESS,
  AllActions,
  ADD_ITEM_TO_CART,
  Country,
  REMOVE_ITEM_FROM_CART,
} from "./../types";

const url = "https://restcountries.com/v3.1/all"
export const fetchCountriesThunk =
  () => async (dispatch: Dispatch<AllActions>) => {
    
    try {
      dispatch({
        type: FETCH_COUNTRIES,
      });

     const {data} = await axios.get(url)
  
      dispatch({
        type: FETCH_COUNTRIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error)
    }
  };


export const addItemsToCart = (items: Country[] | any): AllActions => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: items,
  };
};

export const removeItemsfromCart = (items: Country[] | any): AllActions => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: items,
  };
};
