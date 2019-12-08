import { createStore, combineReducers } from "redux";
import { dailyTodosReducer } from "modules/daily-todos/reducer";

let initialState = {};

const reducer = combineReducers({
  dailyTodos: dailyTodosReducer
});

export default createStore(reducer, initialState);
