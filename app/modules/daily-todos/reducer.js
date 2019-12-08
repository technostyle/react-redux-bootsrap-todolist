import { readTodos, writeTodos } from "data-handler";
import { FILTER_TYPES } from "./constants";

export const DAILY_TODOS_ACTIONS = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
  UPDATE_TODO: "UPDATE_TODO",
  SET_FILTER: "SET_FILTER"
};

const DEFAULT_STATE = {
  todos: [],
  filter: FILTER_TYPES.ALL
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

const setFilter = (state, payload) => {
  const [prev, cur] = payload;
  if (!cur) {
    return state;
  }

  const newState = { ...state, filter: cur };
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
    case DAILY_TODOS_ACTIONS.SET_FILTER:
      return setFilter(state, payload);
    default:
      return state;
  }
};
