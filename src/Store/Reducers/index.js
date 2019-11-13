import { combineReducers } from "redux";
import authReducer from "./Auth";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  firebaseReducer,
  authReducer
});