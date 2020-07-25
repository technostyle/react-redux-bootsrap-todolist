import { get } from "lodash";
import { updateInArrayById } from "utils";

export const DAILY_TODOS_ACTIONS = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  SET_TODO_LEVEL: "SET_TODO_LEVEL",
  SET_TODO_PRIORITY: "SET_TODO_PRIORITY",
  TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
  UPDATE_TODO: "UPDATE_TODO",
  SET_PRIORITY_SORTING: "SET_PRIORITY_SORTING",
  SET_LEVEL_SORTING: "SET_LEVEL_SORTING",
  SET_DATE_SORTING: "SET_DATE_SORTING",
  ADD_SUB_TASK: "ADD_SUB_TASK",
  TOGGLE_COMPLETE_SUB_TASK: "TOGGLE_COMPLETE_SUB_TASK",
  REMOVE_SUB_TASK: "REMOVE_SUB_TASK"
};

const DEFAULT_STATE = {
  todos: []
};

const INITIAL_STATE = DEFAULT_STATE;

const addTodo = (state, payload) => {
  return { ...state, todos: [...state.todos, payload] };
};

const removeTodo = (state, payload) => {
  return {
    ...state,
    todos: state.todos.filter(todo => todo.id !== payload)
  };
};

const updateTodo = (state, payload) => {
  const { id, text } = payload;
  const newTodos = updateInArrayById({
    array: state.todos,
    itemId: id,
    itemUpdate: { text }
  });

  return { ...state, todos: newTodos };
};

const toggleComplete = (state, payload) => {
  const newTodos = state.todos.map(todo => {
    if (todo.id !== payload) {
      return todo;
    }

    const currentStatus = todo.complete;
    return { ...todo, complete: !currentStatus };
  });

  return { ...state, todos: newTodos };
};

const setTodoLevel = (state, payload) => {
  const { id, level } = payload;
  const newTodos = updateInArrayById({
    array: state.todos,
    itemId: id,
    itemUpdate: { level }
  });

  return { ...state, todos: newTodos };
};

const setTodoPriority = (state, payload) => {
  const { id, priority } = payload;
  const newTodos = updateInArrayById({
    array: state.todos,
    itemId: id,
    itemUpdate: { priority }
  });

  return { ...state, todos: newTodos };
};

const addSubTask = (state, payload) => {
  const { taskId, subTaskId, text, complete } = payload;
  const newTodos = state.todos.map(todo => {
    if (todo.id !== taskId) {
      return todo;
    }
    const subTaskList = todo.subTaskList || [];
    const newSubTaskList = [...subTaskList, { id: subTaskId, text, complete }];
    return { ...todo, subTaskList: newSubTaskList };
  });

  return { ...state, todos: newTodos };
};

const toggleCompleteSubTask = (state, payload) => {
  const { taskId, subTaskId } = payload;

  const newTodos = state.todos.map(todo => {
    if (todo.id !== taskId) {
      return todo;
    }

    const subTaskList = todo.subTaskList.map(subTask => {
      if (subTask.id !== subTaskId) {
        return subTask;
      }

      return { ...subTask, complete: !subTask.complete };
    });

    return { ...todo, subTaskList };
  });

  return { ...state, todos: newTodos };
};

const removeSubTask = (state, payload) => {
  const { taskId, subTaskId } = payload;

  const newTodos = state.todos.map(todo => {
    if (todo.id !== taskId) {
      return todo;
    }

    const subTaskList = todo.subTaskList.filter(
      subTask => subTask.id !== subTaskId
    );

    return { ...todo, subTaskList };
  });

  return { ...state, todos: newTodos };
};

export const dailyTodosReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DAILY_TODOS_ACTIONS.ADD_TODO:
      return addTodo(state, payload);
    case DAILY_TODOS_ACTIONS.REMOVE_TODO:
      return removeTodo(state, payload);
    case DAILY_TODOS_ACTIONS.UPDATE_TODO:
      return updateTodo(state, payload);
    case DAILY_TODOS_ACTIONS.TOGGLE_COMPLETE:
      return toggleComplete(state, payload);
    case DAILY_TODOS_ACTIONS.SET_TODO_LEVEL:
      return setTodoLevel(state, payload);
    case DAILY_TODOS_ACTIONS.SET_TODO_PRIORITY:
      return setTodoPriority(state, payload);
    case DAILY_TODOS_ACTIONS.ADD_SUB_TASK:
      return addSubTask(state, payload);
    case DAILY_TODOS_ACTIONS.TOGGLE_COMPLETE_SUB_TASK:
      return toggleCompleteSubTask(state, payload);
    case DAILY_TODOS_ACTIONS.REMOVE_SUB_TASK:
      return removeSubTask(state, payload);
    default:
      return state;
  }
};
