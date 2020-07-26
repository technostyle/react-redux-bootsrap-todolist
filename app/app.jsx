import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "store";
import { TodoListManager } from "containers/todo-list-manager";
import { Modals } from "modals";

ReactDOM.render(
  <Provider store={store}>
    <TodoListManager />
    <Modals />
  </Provider>,
  document.getElementById("root")
);
