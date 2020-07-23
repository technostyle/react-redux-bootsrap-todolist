import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addTodo,
  removeTodo,
  setTodoLevel,
  setTodoPriority,
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
    {
      addTodo,
      removeTodo,
      setTodoLevel,
      setTodoPriority,
      toggleComplete,
      setFilter
    },
    dispatch
  );

export const DailyTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
