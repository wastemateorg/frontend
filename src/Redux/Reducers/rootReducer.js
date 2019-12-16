import { combineReducers } from "redux";
import location from "./location";

const rootReducer = combineReducers({
  location: location
});

export default rootReducer;
