import { createStore, combineReducers, applyMiddleware } from "redux";
import { dailyTodosReducer } from "modules/daily-todos/reducer";
import { localStorageMiddleware } from "./local-storage-middleware";

// TODO: setLocalStorage with entire store, not just dailyTodos
let initialState = {};

const reducer = combineReducers({
  dailyTodos: dailyTodosReducer
});

export default createStore(
  reducer,
  initialState,
  applyMiddleware(localStorageMiddleware)
);
