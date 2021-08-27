import { ADD_ITEM_TO_CART, AllActions, Country, REMOVE_ITEM_FROM_CART } from './../../types';


type InitState = {
    cart: Country[] | Country | any
    
}

const initState:InitState = {
    cart: [],
}

const cartReducer = (state = initState, action:AllActions):InitState=> {
    switch(action.type){
     
    case ADD_ITEM_TO_CART:
     return {
         ...state,
         cart: state.cart.concat(action.payload)
        
     }
    

     case REMOVE_ITEM_FROM_CART:
        return { 
        ...state,
        cart: state.cart.filter((left_Item:any)=> left_Item!== action.payload),
        }

     
        default:
            return state
    }
}

export default cartReducer