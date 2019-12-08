import { flow } from "lodash";
const getData = namespace => () => window.localStorage.getItem(namespace);
const setData = namespace => val => window.localStorage.setItem(namespace, val);

const DAILY_TODOS_NAMESPACE = "DAILY_TODOS";
const EMPTY_JSON = "{}";
const EMPTY_OBJECT = {};

const setTodos = setData(DAILY_TODOS_NAMESPACE);
const getTodos = getData(DAILY_TODOS_NAMESPACE);

const safeJsonParse = data => {
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error("safeJsonParse", e);
  }

  return EMPTY_OBJECT;
};

const safeJsonStringify = data => {
  try {
    return JSON.stringify(data);
  } catch (e) {
    console.error("safeJsonStringify", e);
  }

  return EMPTY_JSON;
};

export const readTodos = flow(getTodos, safeJsonParse);
export const writeTodos = flow(safeJsonStringify, setTodos);
