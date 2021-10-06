/* eslint-disable @typescript-eslint/no-redeclare */

//For Country

export type Country ={
    [index: string]:number | string | Array<string|number>|Object
    name:{
        common:string
    }
    flags: string
    region: string
    languages: Languages[]
    population: number
    borders: string[]
    svg: string

}

export type Languages ={
    name: string,
    nativeName: string
}

export const FETCH_COUNTRIES = "FETCH_COUNTRIES"
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS"
export const FETCH_COUNTRIES_FAIL = "FETCH_COUNTRIES_FAIL"


//action types
export type FetchAllCountriesAction = {
    type: typeof FETCH_COUNTRIES,
}

export type FetchCountriesSuccessAction = {
    type: typeof FETCH_COUNTRIES_SUCCESS,
    payload: []
}

export type FetchCountriesFail = {
    type: typeof FETCH_COUNTRIES_FAIL,
    payload: string
}


//For Cart

export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART"

export type AddToCartAction = {
    type: typeof ADD_ITEM_TO_CART,
    payload: []
}

export type RemoveFromCartAction = {
    type: typeof REMOVE_ITEM_FROM_CART,
    payload: []
}

export type AllActions = FetchAllCountriesAction | FetchCountriesSuccessAction | FetchCountriesFail | AddToCartAction | RemoveFromCartAction 


