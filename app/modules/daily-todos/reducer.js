import { get } from "lodash";
import { readTodos, writeTodos } from "data-handler";
import { FILTER_TYPES, SORTING_TYPES } from "./constants";

export const DAILY_TODOS_ACTIONS = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  SET_TODO_LEVEL: "SET_TODO_LEVEL",
  SET_TODO_PRIORITY: "SET_TODO_PRIORITY",
  TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
  UPDATE_TODO: "UPDATE_TODO",
  SET_FILTER: "SET_FILTER",
  SET_PRIORITY_SORTING: "SET_PRIORITY_SORTING",
  SET_LEVEL_SORTING: "SET_LEVEL_SORTING"
};

const DEFAULT_STATE = {
  todos: [],
  filter: FILTER_TYPES.ALL,
  sorting: {
    type: null,
    incrDecr: null
  }
};
const LOCAL_STORAGE_STATE = readTodos();
const INITIAL_STATE = LOCAL_STORAGE_STATE || DEFAULT_STATE;

const addTodo = (state, payload) => {
  const newState = { ...state, todos: [...state.todos, payload] };
  writeTodos(newState);
  return newState;
};

const removeTodo = (state, payload) => {
  const newState = {
    ...state,
    todos: state.todos.filter(todo => todo.id !== payload)
  };
  writeTodos(newState);
  return newState;
};

const toggleComplete = (state, payload) => {
  const newTodos = state.todos.map(todo => {
    if (todo.id !== payload) {
      return todo;
    }

    const currentStatus = todo.complete;
    return { ...todo, complete: !currentStatus };
  });

  const newState = { ...state, todos: newTodos };
  writeTodos(newState);
  return newState;
};

const setTodoLevel = (state, payload) => {
  const { id, level } = payload;
  const newTodos = state.todos.map(todo => {
    if (todo.id !== id) {
      return todo;
    }
    return { ...todo, level };
  });

  const newState = { ...state, todos: newTodos };
  writeTodos(newState);
  return newState;
};

const setTodoPriority = (state, payload) => {
  const { id, priority } = payload;
  const newTodos = state.todos.map(todo => {
    if (todo.id !== id) {
      return todo;
    }
    return { ...todo, priority };
  });

  const newState = { ...state, todos: newTodos };
  writeTodos(newState);
  return newState;
};

const setFilter = (state, payload) => {
  const [prev, cur] = payload;
  if (!cur) {
    return state;
  }

  const newState = { ...state, filter: cur };
  writeTodos(newState);
  return newState;
};

const setLevelSorting = state => {
  const incrDecr =
    get(state, "sorting.incrDecr") === SORTING_TYPES.DECR
      ? SORTING_TYPES.INCR
      : SORTING_TYPES.DECR;
  const newSorting = { type: SORTING_TYPES.LEVEL, incrDecr };
  const newState = { ...state, sorting: newSorting };
  writeTodos(newState);
  return newState;
};

const setPrioritySorting = state => {
  const incrDecr =
    get(state, "sorting.incrDecr") === SORTING_TYPES.DECR
      ? SORTING_TYPES.INCR
      : SORTING_TYPES.DECR;
  const newSorting = { type: SORTING_TYPES.PRIORITY, incrDecr };
  const newState = { ...state, sorting: newSorting };
  writeTodos(newState);
  return newState;
};

export const dailyTodosReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DAILY_TODOS_ACTIONS.ADD_TODO:
      return addTodo(state, payload);
    case DAILY_TODOS_ACTIONS.REMOVE_TODO:
      return removeTodo(state, payload);
    case DAILY_TODOS_ACTIONS.TOGGLE_COMPLETE:
      return toggleComplete(state, payload);
    case DAILY_TODOS_ACTIONS.SET_TODO_LEVEL:
      return setTodoLevel(state, payload);
    case DAILY_TODOS_ACTIONS.SET_TODO_PRIORITY:
      return setTodoPriority(state, payload);
    case DAILY_TODOS_ACTIONS.SET_FILTER:
      return setFilter(state, payload);
    case DAILY_TODOS_ACTIONS.SET_LEVEL_SORTING:
      return setLevelSorting(state);
    case DAILY_TODOS_ACTIONS.SET_PRIORITY_SORTING:
      return setPrioritySorting(state);
    default:
      return state;
  }
};
