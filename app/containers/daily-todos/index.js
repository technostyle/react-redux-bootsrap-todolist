import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addTodo,
  removeTodo,
  setTodoLevel,
  setTodoPriority,
  toggleComplete,
  updateTodo,
  addSubTask,
  toggleCompleteSubTask,
  removeSubTask
} from "modules/daily-todos/actions";
import {
  setLevelSorting,
  setPrioritySorting,
  setDateSorting
} from "modules/sort-bar/actions";
import { setFilter } from "modules/status-filter-bar/actions";

import { getDailyTodos } from "modules/daily-todos/selectors";
import { getActiveFilter } from "modules/status-filter-bar/selectors";
import { getSortingParams } from "modules/sort-bar/selectors";
import { DailyTodos as Component } from "./daily-todos";

const mapStateToProps = state => ({
  dailyTodos: getDailyTodos(state),
  activeFilter: getActiveFilter(state),
  sortingParams: getSortingParams(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo,
      removeTodo,
      updateTodo,
      setTodoLevel,
      setTodoPriority,
      toggleComplete,
      setFilter,
      setLevelSorting,
      setPrioritySorting,
      setDateSorting,
      addSubTask,
      toggleCompleteSubTask,
      removeSubTask
    },
    dispatch
  );

export const DailyTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
