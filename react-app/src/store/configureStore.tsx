import { createStore } from "redux";
import mergeReducers from "./reducers/reducers";

// @ts-ignore

const store = createStore(
  mergeReducers,
);

export default store;