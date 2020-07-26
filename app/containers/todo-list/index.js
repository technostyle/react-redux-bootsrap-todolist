import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  removeTodo,
  setTodoLevel,
  setTodoPriority,
  toggleComplete,
  updateTodo,
  addSubTask,
  toggleCompleteSubTask,
  removeSubTask
} from "modules/daily-todos/actions";
import { openModal } from "modules/modals/actions";
import { getDailyTodos } from "modules/daily-todos/selectors";
import {
  getActiveFilter,
  getShouldShowOnlyForToday
} from "modules/status-filter-bar/selectors";
import { getSortingParams } from "modules/sort-bar/selectors";
import { TodoList as Component } from "./todo-list";

const mapStateToProps = state => ({
  dailyTodos: getDailyTodos(state),
  activeFilter: getActiveFilter(state),
  shouldShowOnlyForToday: getShouldShowOnlyForToday(state),
  sortingParams: getSortingParams(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeTodo,
      updateTodo,
      setTodoLevel,
      setTodoPriority,
      toggleComplete,
      addSubTask,
      toggleCompleteSubTask,
      removeSubTask,
      openModal
    },
    dispatch
  );

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(Component);
