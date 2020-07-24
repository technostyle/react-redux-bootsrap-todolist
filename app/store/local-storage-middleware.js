import { get } from "lodash";
import { writeTodos } from "data-handler";

export const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const returnValue = next(action);
    writeTodos(get(getState(), "dailyTodos"));
    return returnValue;
  };
};
