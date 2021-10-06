import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { AppState } from "./Reducers/index";
import thunk from "redux-thunk";


const storeInitialState: AppState = {
  countryReducer: {
    countries: [],
     error: "",
     isLoading: false
  },

  cartReducer: {
    cart: [],
  },
};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  storeInitialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
