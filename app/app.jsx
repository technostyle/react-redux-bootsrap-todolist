import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import { DailyTodos } from "./containers/daily-todos";

ReactDOM.render(
  <Provider store={store}>
    <DailyTodos />
  </Provider>,
  document.getElementById("root")
);
