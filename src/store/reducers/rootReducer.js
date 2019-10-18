import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import resultReducer from "./resultReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  result: resultReducer
});

export default rootReducer;
