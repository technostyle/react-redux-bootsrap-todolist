import { createStore, combineReducers, applyMiddleware } from "redux";
import { modalsReducer, MODALS_NAMESPACE } from "modules/modals";
import { dailyTodosReducer, DAILY_TODOS_NAMESPACE } from "modules/daily-todos";
import {
  statusFilterReducer,
  STATUS_FILTER_NAMESPACE
} from "modules/status-filter-bar";
import { sortBarReducer, SORT_BAR_NAMESPACE } from "modules/sort-bar";
import { localStorageMiddleware } from "./local-storage-middleware";
import { readState } from "../data-handler";

let initialState = readState() || {};
console.log({ initialState });

const reducer = combineReducers({
  [MODALS_NAMESPACE]: modalsReducer,
  [DAILY_TODOS_NAMESPACE]: dailyTodosReducer,
  [STATUS_FILTER_NAMESPACE]: statusFilterReducer,
  [SORT_BAR_NAMESPACE]: sortBarReducer
});

export default createStore(
  reducer,
  initialState,
  applyMiddleware(localStorageMiddleware)
);
