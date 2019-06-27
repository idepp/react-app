import { combineReducers } from "redux";

import loginReducer from "./loginReducers/loginReducer";

const mergeReducers: any = combineReducers({
  login: loginReducer,
});

export default mergeReducers;