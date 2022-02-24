import { combineReducers } from "redux";
import { userReducer } from "./reducer";

export const rootReducer = combineReducers({
  userData: userReducer,
});
