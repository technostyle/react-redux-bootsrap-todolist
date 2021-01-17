import { DAILY_TODOS_ACTIONS } from "./reducer";

export const addTodo = text => ({
  type: DAILY_TODOS_ACTIONS.ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    complete: false,
    subTaskList: [],
    priority: 0
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

export const updateTodo = (id, text) => ({
  type: DAILY_TODOS_ACTIONS.UPDATE_TODO,
  payload: { id, text }
});

export const setTodoLevel = (id, level) => ({
  type: DAILY_TODOS_ACTIONS.SET_TODO_LEVEL,
  payload: { id, level }
});

export const setTodoPriority = (id, priority) => ({
  type: DAILY_TODOS_ACTIONS.SET_TODO_PRIORITY,
  payload: { id, priority }
});

export const addSubTask = (id, text) => ({
  type: DAILY_TODOS_ACTIONS.ADD_SUB_TASK,
  payload: { taskId: id, subTaskId: Date.now(), text, complete: false }
});

export const toggleCompleteSubTask = (taskId, subTaskId) => ({
  type: DAILY_TODOS_ACTIONS.TOGGLE_COMPLETE_SUB_TASK,
  payload: { taskId, subTaskId }
});

export const removeSubTask = (taskId, subTaskId) => ({
  type: DAILY_TODOS_ACTIONS.REMOVE_SUB_TASK,
  payload: { taskId, subTaskId }
});

export const addDescription = (id, description) => ({
  type: DAILY_TODOS_ACTIONS.ADD_DESCRIPTION,
  payload: { id, description }
});

export const setStartDay = (id, startDay) => ({
  type: DAILY_TODOS_ACTIONS.SET_START_DAY,
  payload: { id, startDay }
});

export const setDeadline = (id, deadline) => ({
  type: DAILY_TODOS_ACTIONS.SET_DEADLINE,
  payload: { id, deadline }
});

export const setEstimate = (id, estimate) => ({
  type: DAILY_TODOS_ACTIONS.SET_ESTIMATE,
  payload: { id, estimate }
});

export const setWorkLog = (id, workLog) => ({
  type: DAILY_TODOS_ACTIONS.SET_WORK_LOG,
  payload: { id, workLog }
});
