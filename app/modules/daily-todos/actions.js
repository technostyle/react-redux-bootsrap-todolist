import { DAILY_TODOS_ACTIONS } from "./reducer";

export const addTodo = text => ({
  type: DAILY_TODOS_ACTIONS.ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    complete: false
  }
});

export const toggleComplete = id => ({
  type: DAILY_TODOS_ACTIONS.TOGGLE_COMPLETE,
  payload: id
});

export const removeTodo = id => ({
  type: DAILY_TODOS_ACTIONS.REMOVE_TODO,
  payload: id
});

export const updateTodo = todo => ({
  type: DAILY_TODOS_ACTIONS.UPDATE_TODO,
  payload: todo.id
});

export const setFilter = filter => ({
  type: DAILY_TODOS_ACTIONS.SET_FILTER,
  payload: filter
});

export const setTodoLevel = (id, level) => ({
  type: DAILY_TODOS_ACTIONS.SET_TODO_LEVEL,
  payload: { id, level }
});

export const setTodoPriority = (id, priority) => ({
  type: DAILY_TODOS_ACTIONS.SET_TODO_PRIORITY,
  payload: { id, priority }
});

export const setPrioritySorting = () => ({
  type: DAILY_TODOS_ACTIONS.SET_PRIORITY_SORTING
});

export const setLevelSorting = () => ({
  type: DAILY_TODOS_ACTIONS.SET_LEVEL_SORTING
});
