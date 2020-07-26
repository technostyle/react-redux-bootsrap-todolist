import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "modules/daily-todos/actions";

import { TodoListManager as Component } from "./todo-list-manager";

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo }, dispatch);

export const TodoListManager = connect(null, mapDispatchToProps)(Component);
