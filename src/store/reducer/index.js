import { combineReducers } from "redux";
import auth from "../reducer/auth";
import counter from "../reducer/counter";

export default combineReducers({
  auth, counter
});