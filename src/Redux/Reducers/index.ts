import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import countryReducer from "./country";

const rootReducer = combineReducers({
  countryReducer,
  cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
