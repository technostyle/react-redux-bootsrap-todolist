import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addTodo,
  removeTodo,
  toggleComplete,
  setFilter
} from "modules/daily-todos/actions";
import { getDailyTodos, getActiveFilter } from "modules/daily-todos/selectors";
import { DailyTodos as Component } from "./daily-todos";

const mapStateToProps = state => ({
  dailyTodos: getDailyTodos(state),
  activeFilter: getActiveFilter(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addTodo, removeTodo, toggleComplete, setFilter },
    dispatch
  );

export const DailyTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
