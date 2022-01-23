import { combineReducers } from "redux";
import auth from "store/reducer/auth";
import counter from "store/reducer/counter";

export default combineReducers({
  auth, counter
});